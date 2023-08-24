const getUserByLogin = require("../controllers/users/getUserByLogin");
const postUsers = require("../controllers/users/postUsers");
const setAccessUser = require("../controllers/users/setAccessUser");
const setProgressUser = require("../controllers/users/setProgressUser");
const getProgressUser = require("../controllers/users/getProgressUser");

const postUsersHandler = async (req, res) => {
  const body = req.body;
  try {
    const Users = await postUsers(body);
    res.status(200).json(Users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getUserByLoginHandler = async (req, res) => {
  const { email, password } = req.query;
  try {
    const User = await getUserByLogin(email, password);
    res.status(200).json(User);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const setAccessUserHandler = async (req, res) => {
  const { email, password } = req.query;
  try {
    const User = await setAccessUser(email, password);
    res.status(200).json(User);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getProgressUserHandler = async (req, res) => {
  const { id } = req.query;
  try {
    const User = await getProgressUser(id);
    res.status(200).json(User);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const setProgressUserHandler = async (req, res) => {
  const { id } = req.query;
  const {direction} = req.body;
  try {
    const User = await setProgressUser(id, direction);
    res.status(200).json(User);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postUsersHandler,
  getUserByLoginHandler,
  setAccessUserHandler,
  setProgressUserHandler,
  getProgressUserHandler
};
