const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res
        .status(401)
        .send(
          "A user with that email address or username already exists. Please try again."
        );
    } else {
      next(err);
    }
  }
});
//can probably use this axios call to verify users to make sure they only have access to their cart, their order history, etc.
router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});
