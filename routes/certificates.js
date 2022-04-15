const router = require("express").Router();
const Certificate = require("../models/Certificate");

router.post("/", async (req, res) => {
  const newCer = new Certificate(req.body);
  try {
    const savedCer = await newCer.save();
    res.status(200).json(savedCer);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const cers = await Certificate.find();
    res.status(200).json(cers);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const cer = await Certificate.findById(req.params.id);
    res.status(200).json(cer);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
