const express = require("express");
const router = express.Router();

const db = require("./data/helpers/actionModel");

router.get("/", async (req, res) => {
  try {
    const actions = await req.body;
    db.get().then(actions => {
      res.status(200).json({ actions: actions });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const actions = await req.body;
    db.get(id).then(actions => {
      res.status(200).json({ actions: actions });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
module.exports = router;
