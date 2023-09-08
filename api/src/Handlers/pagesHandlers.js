const getAllPages = require("../controllers/pages/getAllPages");
const postPages = require("../controllers/pages/postPages");

const getAllPagesHandler = async (req, res) => {
  try {
    const Pages = await getAllPages();
    res.status(200).json(Pages);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const postPagesHandler = async (req, res) => {
  const body = req.body;
  try {
    const Pages = await postPages(body);
    res.status(200).json(Pages);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getAllPagesHandler, postPagesHandler };
