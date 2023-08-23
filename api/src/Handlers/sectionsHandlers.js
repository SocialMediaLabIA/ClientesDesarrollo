const postSections = require("../controllers/sections/postSections");

const postSectionsHandler = async (req, res) => {
  const body = req.body;
  try {
    const sections = await postSections(body);
    res.status(200).json(sections);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postSectionsHandler,
};
