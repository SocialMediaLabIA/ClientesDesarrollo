const { Router } = require("express");
const UsersRouter = require("./usersRouter");
const router = Router();

router.use("/users", UsersRouter);

module.exports = router;
