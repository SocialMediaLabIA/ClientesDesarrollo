const Users = require("../../models/Users");

const setProgressUser = async (id, direction) => {
let user = {}

  if (direction === "next") {
    user = await Users.findOneAndUpdate(
      { _id: id },
      { $inc: { progress: 1 } },
      { new: true }
    );
  }
  if (direction === "prev") {
    user = await Users.findOneAndUpdate(
      { _id: id },
      { $inc: { progress: -1 } },
      { new: true }
    );
  }
  return user;
};

module.exports = setProgressUser;
