const getUserByEmail = require("../controllers/users/getUserByEmail");
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

const getUserByEmailHandler = async (req, res) => {
  const { email } = req.query;
  try {
    const User = await getUserByEmail(email);
    res.status(200).json(User);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postUsersHandler,
  getUserByEmailHandler,
};
