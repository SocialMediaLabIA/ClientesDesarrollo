const Users = require("../../models/Users");

const postUsers = async (body) => {
  const users = await Users.create(body);

  return users;
};

module.exports = postUsers;
