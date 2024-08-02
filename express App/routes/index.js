var routes = require("express").Router();
routes.get("/get-Home", (req, res) => {
  return res.send("Welcome to home page");
});
module.exports = routes;
