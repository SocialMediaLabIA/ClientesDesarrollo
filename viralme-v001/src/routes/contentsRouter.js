const { Router } = require("express");
const { postContentsHandler } = require("../Handlers/contentsHandlers");

const ContentsRouter = Router();

ContentsRouter.post("/", postContentsHandler);

module.exports = ContentsRouter;
