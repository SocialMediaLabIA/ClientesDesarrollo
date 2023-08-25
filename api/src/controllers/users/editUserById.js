const Users = require("../../models/Users");

const editUserById = async (id, body) => {
  const user = await Users.findOneAndUpdate({ _id: id }, body, { new: true });
  return user;
};

module.exports = editUserById;
