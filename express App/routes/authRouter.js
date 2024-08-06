var routes = require("express").Router();
const { login, logOut } = require("../controllers/authController");

routes.get("/login", login);
routes.delete("/logout", logOut);
module.exports = routes;
