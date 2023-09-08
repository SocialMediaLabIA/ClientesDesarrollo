const { Router } = require("express");
const UsersRouter = require("./usersRouter");
const ContentsRouter = require("./contentsRouter");
const PagesRouter = require("./pagesRouter");

const router = Router();

router.use("/users", UsersRouter);
router.use("/contents", ContentsRouter);
router.use("/pages", PagesRouter);

module.exports = router;
