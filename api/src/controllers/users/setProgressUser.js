const Users = require("../../models/Users");

const setProgressUser = async (id) => {
  const user = await Users.findOneAndUpdate(
    { _id: id },
    { $inc: { progress: 1 } },
    { new: true }
  );
  return user;
};

module.exports = setProgressUser;
