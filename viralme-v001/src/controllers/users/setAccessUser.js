const Users = require("../../models/Users");

const setAccessUser = async (email, password) => {
  const user = await Users.findOneAndUpdate(
    { email, password },
    { access: true },
    { new: true }
  );
  return user;
};

module.exports = setAccessUser;
