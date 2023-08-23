const { Router } = require("express");
const {
  postUsersHandler,
  getUserByEmailHandler,
  getAllUserHandler,
} = require("../Handlers/usersHandlers");

const UsersRouter = Router();

UsersRouter.get("/", getAllUserHandler);
UsersRouter.get("/email", getUserByEmailHandler);
UsersRouter.post("/", postUsersHandler);

module.exports = UsersRouter;
