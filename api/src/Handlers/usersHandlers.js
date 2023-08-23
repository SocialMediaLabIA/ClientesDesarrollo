const postUsers = require("../controllers/users/postUsers");

const postUsersHandler = async (req, res) => {
  const body = req.body;
  try {
    const Users = await postUsers(body);
    res.status(200).json(Users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postUsersHandler,
};
