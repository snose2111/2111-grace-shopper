const router = require("express").Router();
const {
  models: { User, Cart, Clothing, CartItems },
} = require("../db");
const { requireToken } = require("./gatekeepingMiddleware");
module.exports = router;

// this route should be ADMIN only -- should allow ADMIN to access ALL ORDERS.
router.get("/", async (req, res, next) => {
  try {
    const orders = await Cart.findAll({
      include: {
        model: Clothing,
      },
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

// this route lists only the items in an unfulfilled cart for a specific user.
router.get("/:userId", async (req, res, next) => {
  try {
    // first we find an unfulfilled cart.
    const cart = await Cart.findOne({
      where: {
        userId: req.params.userId,
        isFulfilled: false,
      },
    });
    //if it exists, load all the clothes associated with the cart.
    if (cart) {
      const clothes = await Clothing.findAll({
        include: { model: Cart, where: { id: cart.id } },
      });
      res.json(clothes);
    } else {
      // if cart does not exist, we create one
      const user = await User.findByPk(req.params.userId);
      const newCart = await user.createCart();
      const clothes = await Clothing.findAll({
        include: { model: Cart, where: { id: newCart.id } },
      });
      res.json(clothes);
    }
  } catch (err) {
    next(err);
  }
});

// allows user to create a add a new item to their cart. use with add to cart button.
router.post("/:userId/:clothingId", async (req, res, next) => {
  try {
    // first we have to look to see if a user already has an existing, unfulfilled cart.
    const existingCart = await Cart.findOne({
      where: {
        userId: req.params.userId,
        isFulfilled: false,
      },
    });
    // then, we can add the clothes to the cart. in order to do so, we have to create a new instance on the CartItems table.

    const [clothes, newItem] = await CartItems.findOrCreate({
      where: {
        clothingId: req.params.clothingId,
        cartId: existingCart.id,
      },
      defaults: {
        quantity: req.body.quantity,
        price: req.body.price,
      },
    });
    // if the item ALREADY exists in a user's cart, just update the quantity and the price (?).
    if (!newItem) {
      await CartItems.update(
        {
          quantity: req.body.quantity + clothes.quantity,
          price: Number(req.body.price) + Number(clothes.price),
          clothingId: req.params.clothingId,
          cartId: existingCart.id,
        },
        {
          where: {
            clothingId: req.params.clothingId,
            cartId: existingCart.id,
          },
          returning: true,
          plain: true,
        }
      );
    }
    res.status(201).json(clothes);
  } catch (err) {
    next(err);
  }
});

// this should allow a user to get a UPDATE a specific item IN a cart. when user navigates to cart and clicks on the quantity of the item they want change.
router.put("/:cartId/:clothingId", async (req, res, next) => {
  try {
    const clothes = await CartItems.findOne({
      where: {
        clothingId: req.params.clothingId,
        cartId: req.params.cartId,
      },
    });
    await clothes.update({
      quantity: req.body.quantity,
      price: req.body.price,
    });

    res.json(clothes);
  } catch (err) {
    next(err);
  }
});

// this should allow you to DELETE an item from a cart.
router.delete("/:cartId/:clothingId", async (req, res, next) => {
  try {
    const clothes = await CartItems.destroy({
      where: {
        cartId: req.params.cartId,
        clothingId: req.params.clothingId,
      },
    });
    res.json(clothes);
  } catch (err) {
    next(err);
  }
});
