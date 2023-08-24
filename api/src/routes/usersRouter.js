const { Router } = require("express");
const {
  postUsersHandler,
  getUserByLoginHandler,
  setAccessUserHandler,
  setProgressUserHandler
} = require("../Handlers/usersHandlers");

const UsersRouter = Router();

// UsersRouter.get("/", getAllUserHandler);
UsersRouter.get("/email", getUserByLoginHandler);
UsersRouter.put("/access", setAccessUserHandler);
console.log("ROUTESSSSSS")
UsersRouter.put("/progress", setProgressUserHandler);
UsersRouter.post("/", postUsersHandler);

module.exports = UsersRouter;
