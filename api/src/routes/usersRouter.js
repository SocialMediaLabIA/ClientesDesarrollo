const { Router } = require("express");
const {
  postUsersHandler,
  getUserByEmailHandler,
} = require("../Handlers/usersHandlers");

const UsersRouter = Router();

UsersRouter.get("/", getUserByEmailHandler);
UsersRouter.post("/", postUsersHandler);

module.exports = UsersRouter;
