const Users = require("../../models/Users");

const getUserByLogin = async (email, password) => {
  const user = await Users.findOne({ email, password });

  return user;
};

module.exports = getUserByLogin;
