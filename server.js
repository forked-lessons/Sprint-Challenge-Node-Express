const express = require("express");

const actionsRouter = require("./actionsRoute");
// const projectsRouter = require("./projectsRoute");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h2>It's Working!!!</h2>");
});

server.use("/api/actions", actionsRouter);
// server.use("/api/users", projectsRouter);

module.exports = server;
