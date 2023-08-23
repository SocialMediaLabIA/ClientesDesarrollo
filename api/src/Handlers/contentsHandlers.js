const postContents = require("../controllers/contents/postContents");

const postContentsHandler = async (req, res) => {
  const body = req.body;
  try {
    const contents = await postContents(body);
    res.status(200).json(contents);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postContentsHandler,
};
