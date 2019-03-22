const express = require("express");
const router = express.Router();

const db = require("./data/helpers/actionModel");

router.get("/", async (req, res) => {
  try {
    const actions = req.body;
    await db.get().then(actions => {
      res.status(200).json({ actions: actions });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const actions = req.body;
    await db.get(id).then(actions => {
      res.status(200).json({ actions: actions });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newAction = req.body;
    await db.insert(newAction).then(response => {
      res.status(201).json(response);
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const action = req.params.id;
    await db.remove(action);
    res.status(200).json(action);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
