const { Router } = require("express");
const UsersRouter = require("./usersRouter");
const ContentsRouter = require("./contentsRouter");

const router = Router();

router.use("/users", UsersRouter);
router.use("/contents", ContentsRouter);

module.exports = router;
