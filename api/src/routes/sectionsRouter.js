const { Router } = require("express");
const { postSectionsHandler } = require("../Handlers/sectionsHandlers");

const SectionsRouter = Router();

SectionsRouter.post("/", postSectionsHandler);

module.exports = SectionsRouter;
