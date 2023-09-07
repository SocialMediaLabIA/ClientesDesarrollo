const Users = require("../../models/Users");

const getProgressUser = async (id) => {
  const user = await Users.findOne({ _id: id });
  return user;
};

module.exports = getProgressUser;
