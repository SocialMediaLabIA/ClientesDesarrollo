const Users = require("../../models/Users");

const getAllUser = async () => {
  const users = await Users.find();

  return users;
};

module.exports = getAllUser;
