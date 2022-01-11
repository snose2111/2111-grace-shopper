const router = require("express").Router();
const {
  models: { Clothing },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const clothing = await Clothing.findAll();
    res.json(clothing);
  } catch (err) {
    next(err);
  }
});

router.get("/:clothingName", async (req, res, next) => {
  try {
    const clothing = await Clothing.findAll({
      where: {
        name: req.params.clothingName,
      },
    });
    res.json(clothing);
  } catch (err) {
    next(err);
  }
});

router.get("/:clothingName/:clothingId", async (req, res, next) => {
  try {
    const clothing = await Clothing.findAll({
      where: {
        name: req.params.clothingName,
      },
    });
    res.json(clothing);
  } catch (err) {
    next(err);
  }
});

router.put("/:clothingName/:clothingId", async (req, res, next) => {
  try {
    const item = await Clothing.findByPk(req.params.clothingId);
    res.json(item);
  } catch (err) {
    next(err);
  }
});
