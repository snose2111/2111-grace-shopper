const router = require("express").Router();
const {
  models: {CartItems},
} = require("../db");
module.exports = router;


// this route lists only the items in a specific cart.


router.get("/:cartId", async (req, res, next) => {
  try {
    const clothes = await CartItems.findAll({
      where: {
        cartId: req.params.cartId
      }
    });

  res.json(clothes)
  }
  catch (err) {
    next(err);
  }
})

// this should allow a user to get a specific item IN a cart.
router.get("/:cartId/:clothingId", async (req, res, next) => {
  try {
    const clothes = await CartItems.findOne({
      where: {
        cartId: req.params.cartId,
        clothingId: req.params.clothingId,
      }
    });

  res.json(clothes)
  }
  catch (err) {
    next(err);
  }
})

// allows user to create a add a new item to their cart.
router.post("/:cartId/", async (req, res, next) => {
  try {
    const clothes = await CartItems.create(req.body);
    res.status(201).json(clothes)
  }
  catch (err) {
    next(err)
  }
})

// this should allow a user to UPDATE a specific item IN a cart.
router.put("/:cartId/:clothingId", async (req, res, next) => {
  try {
    const clothes = await CartItems.findOne({
      where: {
        cartId: req.params.cartId,
        clothingId: req.params.clothingId,
      }
    });

  const {quantity, price} = req.body
  res.json(await clothes.update({quantity, price}))
  }
  catch (err) {
    next(err);
  }
})

router.delete("/:cartId/:clothingId", async (req, res, next) => {
  try {
    const clothes = await CartItems.findOne({
      where: {
        cartId: req.params.cartId,
        clothingId: req.params.clothingId,
      }
    });
    await clothes.destroy()
    res.json(clothes)
  }
  catch (err) {
    next(err)
  }
})

