var routes = require("express").Router();
routes.get("/create", (req, res) => {
  res.send("Create user api");
});
routes.get("/update", (req, res) => {
  res.send("update user api");
});
routes.get("/delete", (req, res) => {
  res.send("delete user api");
});
module.exports = routes;
