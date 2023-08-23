const { Router } = require("express");
const { postUsersHandler } = require("../Handlers/usersHandlers");

const UsersRouter = Router();

UsersRouter.post("/", postUsersHandler);

module.exports = UsersRouter;
