const router = require("express").Router();
const {
  models: { User, Cart, Clothing, CartItems },
} = require("../db");
const { requireToken } = require("./gatekeepingMiddleware")
module.exports = router;

// this route lists only the items in an unfulfilled cart for a specific user.
router.get("/:userId", requireToken, async (req, res, next) => {
  try {
      const cart = await Cart.findOne({
        where: {
          userId: req.params.userId,
          isFulfilled: false
        }
      })
    if(cart) {
      const clothes = await CartItems.findAll({
        where: {
          cartId: cart.id
        }
      })
      res.json(clothes)
    }
  }
  catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
      const orders = await Cart.findAll({
        where: {
          isFulfilled: true,
        },
        include: {
          model: Clothing,
        },
      });
      res.json(orders);
    }
    catch (err) {
    next(err);
  }
});

// this should allow a user to get a specific item IN a cart.
router.get("/:cartId/:clothingId", async (req, res, next) => {
  try {
    const clothes = await CartItems.findOne({
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

// allows user to create a add a new item to their cart.
router.post("/:cartId/", async (req, res, next) => {
  try {
    const clothes = await CartItems.create(req.body);
    res.status(201).json(clothes);
  } catch (err) {
    next(err);
  }
});

// this should allow a user to UPDATE a specific item IN a cart.
router.put("/:cartId/:clothingId", async (req, res, next) => {
  try {
    const clothes = await CartItems.findOne({
      where: {
        cartId: req.params.cartId,
        clothingId: req.params.clothingId,
      },
    });

    const { quantity, price } = req.body;
    res.json(await clothes.update({ quantity, price }));
  } catch (err) {
    next(err);
  }
});

router.delete("/:cartId/:clothingId", async (req, res, next) => {
  try {
    const clothes = await CartItems.findOne({
      where: {
        cartId: req.params.cartId,
        clothingId: req.params.clothingId,
      },
    });
    await clothes.destroy();
    res.json(clothes);
  } catch (err) {
    next(err);
  }
});
