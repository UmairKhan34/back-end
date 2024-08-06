var routes = require("express").Router();
const { create, getAll } = require("../controllers/userController");
const { createUserSchema } = require("../validations/user");

routes.get("/get", getAll);
routes.post("/create", createUserSchema, create);
module.exports = routes;
