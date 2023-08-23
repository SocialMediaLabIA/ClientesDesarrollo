const { Router } = require("express");
const UsersRouter = require("./usersRouter");
const ContentsRouter = require("./contentsRouter");
const SectionsRouter = require("./sectionsRouter");
const router = Router();

router.use("/users", UsersRouter);
router.use("/contents", ContentsRouter);
router.use("/sections", SectionsRouter);

module.exports = router;
