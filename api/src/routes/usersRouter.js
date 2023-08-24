const { Router } = require("express");
const {
  postUsersHandler,
  getUserByLoginHandler,
  setAccessUserHandler,
  getAllUserHandler,
} = require("../Handlers/usersHandlers");

const UsersRouter = Router();

UsersRouter.get("/", getAllUserHandler);
UsersRouter.get("/email", getUserByLoginHandler);
UsersRouter.put("/access", setAccessUserHandler);
UsersRouter.post("/", postUsersHandler);

module.exports = UsersRouter;
