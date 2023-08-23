const Users = require("../../models/Users");

const getUserByEmail = async (email) => {
  const user = await Users.findOne({ email });

  return user;
};

module.exports = getUserByEmail;
