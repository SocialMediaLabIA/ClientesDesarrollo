const Users = require("../../models/Users");

const getUserById = async (id) => {
  const user = await Users.findOne({ _id: id });
  return user;
};

module.exports = getUserById;
