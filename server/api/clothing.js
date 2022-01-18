const router = require("express").Router();
const {
  models: { Clothing },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const clothing = await Clothing.findAll();
    res.json(clothing);
  } catch (err) {
    next(err);
  }
});

router.get("/:clothingType", async (req, res, next) => {
  try {
    const clothing = await Clothing.findAll({
      where: {
        type: req.params.clothingType,
      },
    });
    res.json(clothing);
  } catch (err) {
    next(err);
  }
});

// create item
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Clothing.create(req.body));
  } catch (err) {
    next(err);
  }
});

// get individual item
router.get("/items/:clothingId", async (req, res, next) => {
  try {
    console.log(req.params.clothingId);
    const clothing = await Clothing.findByPk(req.params.clothingId);
    res.json(clothing);
  } catch (err) {
    next(err);
  }
});

// create item
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Clothing.create(req.body));
  } catch (err) {
    next(err);
  }
});

// update individual item
router.put("/items/:clothingId", async (req, res, next) => {
  try {
    const item = await Clothing.findByPk(req.params.clothingId);
    res.send(await item.update(req.body));
  } catch (err) {
    next(err);
  }
});

// delete item
router.delete("/item/:clothingId", async (req, res, next) => {
  try {
    const item = await Clothing.findByPk(req.params.clothingId);
    await item.destroy();
    res.send(item);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
