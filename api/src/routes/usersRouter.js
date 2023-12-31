const { Router } = require("express");
const {
  postUsersHandler,
  getUserByLoginHandler,
  setAccessUserHandler,
  setProgressUserHandler,
  getProgressUserHandler,
  getAllUserHandler,
  editUserByIdHandler,
  getUserByIdHandler,
} = require("../Handlers/usersHandlers");

const UsersRouter = Router();
//GET
UsersRouter.get("/", getAllUserHandler);
UsersRouter.get("/progress", getProgressUserHandler);
UsersRouter.get("/email", getUserByLoginHandler);
UsersRouter.get("/userid", getUserByIdHandler);

//PUT
UsersRouter.put("/progress", setProgressUserHandler);
UsersRouter.put("/access", setAccessUserHandler);
UsersRouter.put("/edituser", editUserByIdHandler);

//POST
UsersRouter.post("/", postUsersHandler);

//DELETE

module.exports = UsersRouter;
