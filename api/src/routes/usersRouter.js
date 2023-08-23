const { Router } = require("express");
const {
  postUsersHandler,
  getUserByLoginHandler,
} = require("../Handlers/usersHandlers");

const UsersRouter = Router();

UsersRouter.get("/email", getUserByLoginHandler);
UsersRouter.post("/", postUsersHandler);

module.exports = UsersRouter;
