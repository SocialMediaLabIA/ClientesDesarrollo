const { Router } = require("express");
const {
  postPagesHandler,
  getAllPagesHandler,
} = require("../Handlers/pagesHandlers");

const PagesRouter = Router();
//GET
PagesRouter.get("/", getAllPagesHandler);

//PUT

//POST
PagesRouter.post("/", postPagesHandler);

//DELETE

module.exports = PagesRouter;
