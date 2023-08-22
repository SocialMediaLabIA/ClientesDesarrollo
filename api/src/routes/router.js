const { Router } = require("express");
const router = Router();
const CLevelRouter = require("./CLevelRouter");

router.use("/clevel", CLevelRouter);

module.exports = router;
