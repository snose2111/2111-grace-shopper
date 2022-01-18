const router = require("express").Router();
const { user } = require("pg/lib/defaults");
const {
  models: { User, Clothing, Cart },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

// LOAD a single user
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// UPDATE a single user.
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    res.json(await user.update(req.body));
  } catch (err) {
    next(err);
  }
});

// this should get ALL carts and their items that are associated with a user. whether they are fulfilled or unfulfilled.
router.get("/:userId/cart", async (req, res, next) => {
  try {
    const carts = await Cart.findAll({
      where: {
        userId: req.params.userId,
      },
      include: {
        model: Clothing,
      },
    });
    res.json(carts);
  } catch (err) {
    next(err);
  }
});

// this should get ONLY unfulfilled cart + items
router.get("/:userId/cart", async (req, res, next) => {
  try {
    const carts = await Cart.findAll({
      where: {
        userId: req.params.userId,
        isFulfilled: false,
      },
      include: {
        model: Clothing,
      },
    });
    res.json(carts);
  } catch (err) {
    next(err);
  }
});

// allows user to CREATE a new cart associated to that user.
router.post("/:userId/cart", async (req, res, next) => {
  try {
    const newCart = await Cart.create();
    const user = await User.findByPk(req.params.userId);
    user.addCart(newCart);
  } catch (err) {
    next(err);
  }
});

//this should update a specific user's specific cart's status. This is a route we would probably use to change a cart from "unfulfilled" to "fulfilled".
router.put("/:userId/cart/:cartId", async (req, res, next) => {
  try {
    const cart = await Cart.findOne({
      where: {
        id: req.params.cartId,
        userId: req.params.userId,
      },
    });
    res.json(await cart.update(req.body));
  } catch (err) {
    next(err);
  }
});

// this should allow a user to GET a SPECIFIC CART and their items. we would probably use this to show an open order and its current items. we could also use this to show a closed/fulfilled order and the corresponding items.

router.get("/:userId/cart/:cartId", async (req, res, next) => {
  try {
    const cart = await Cart.findOne({
      where: {
        id: req.params.cartId,
        userId: req.params.userId,
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Clothing,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// this should allow a specific user to get a specific item in a cart
router.get("/:userId/cart/:cartId/:clothingId", async (req, res, next) => {
  try {
    const clothes = await Cart.findOne({
      where: {
        id: req.params.cartId,
        userId: req.params.userId,
      },
      include: {
        model: Clothing,
        where: {
          id: req.params.clothingId,
        },
      },
    });

    res.json(clothes);
  } catch (err) {
    next(err);
  }
});
