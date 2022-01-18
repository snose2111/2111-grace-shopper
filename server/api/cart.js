const router = require("express").Router();
const {
  models: { User, Cart, Clothing, CartItems },
} = require("../db");
module.exports = router;

// this route lists only the items in a specific cart.
router.get("/", async (req, res, next) => {
  try {
    if(req.user){
    const clothes = await CartItems.findAll({
      include: [
        {
          model: Cart,
          where: {
            userId: req.user.id,
            isFulfilled: false
          }
        },
        Clothing
      ]
      });

    res.json(clothes)
  }
  } catch (err) {
    next(err);
  }
});

// router.get("/", async (req, res, next) => {
//   try {
//     const user = User.findByToken(req.headers.authorization);
//     if (user) {
//       const cart = await Cart.findAll({
//         where: {
//           userId: user.id,
//           isFulfilled: false,
//         },
//         include: {
//           model: Clothing,
//         },
//       });
//       res.json(cart.clothing);
//     }
//   } catch (err) {
//     next(err);
//   }
// });

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
