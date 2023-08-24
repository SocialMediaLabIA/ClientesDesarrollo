const { Router } = require("express");
const {
  postUsersHandler,
  getUserByLoginHandler,
  setAccessUserHandler,
  setProgressUserHandler,
  getProgressUserHandler
  // getAllUserHandler,
} = require("../Handlers/usersHandlers");

const UsersRouter = Router();

// UsersRouter.get("/", getAllUserHandler);
UsersRouter.get("/progress", getProgressUserHandler);
UsersRouter.get("/email", getUserByLoginHandler);
UsersRouter.put("/progress", setProgressUserHandler);
UsersRouter.put("/access", setAccessUserHandler);

UsersRouter.post("/", postUsersHandler);

module.exports = UsersRouter;
