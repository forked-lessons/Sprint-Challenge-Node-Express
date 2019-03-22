const express = require("express");

// const actionsRouter = require("./actionsRoute");
// const projectsRouter = require("./projectsRoute");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h2>It's Working!!!</h2>");
});

function formatting(req, res, next) {
  const user = req.body;
  req.body.name = user.name
    .toLowerCase()
    .split(" ")
    .map(i => i.charAt(0).toUpperCase() + i.substring(1))
    .join(" ");
  next();
}

// server.use("/api/posts", actionsRouter);
// server.use("/api/users", projectsRouter);

module.exports = server;
