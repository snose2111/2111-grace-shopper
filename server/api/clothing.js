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

<<<<<<< HEAD
// create item
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Clothing.create(req.body));
=======
router.get("/item/:clothingId", async (req, res, next) => {
  try {
    const clothing = await Clothing.findByPk(req.params.clothingId);
    res.send(clothing);
>>>>>>> 79c4efe9261da92dcd6f256c26abfba45c3a6cd3
  } catch (err) {
    next(err);
  }
});

// get individual item
router.get("/item/:clothingId", async (req, res, next) => {
  try {
    const item = await Clothing.findByPk(req.params.clothingId);
    res.json(item);
  } catch (err) {
    next(err);
  }
});

// update individual item
router.put("/item/:clothingId", async (req, res, next) => {
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
