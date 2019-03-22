const express = require("express");
const router = express.Router();

const db = require("./data/helpers/projectModel");

router.get("/", async (req, res) => {
  try {
    const project = req.body;
    await db.get().then(project => {
      res.status(200).json({ project: project });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const project = req.body;
    await db.get(id).then(project => {
      res.status(200).json({ project: project });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newProject = req.body;
    await db.insert(newProject).then(response => {
      res.status(201).json(response);
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const project = req.params.id;
    await db.remove(project);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const changes = req.body;
    const id = req.params.id;
    const project = await db.update(id, changes);
    if (id) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "the post could not be found" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
