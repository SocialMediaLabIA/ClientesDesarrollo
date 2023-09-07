const Users = require("../../models/Users");

const setProgressUser = async (id, direction) => {
  let user = {}
  
  if (direction === 1 || direction === 2) {
    console.log(direction)
    user = await Users.findOneAndUpdate(
      { _id: id },
      { $inc: { progress: direction } },
      { new: true }
    );
  }
  if (direction === -1 || direction === -2) {
    user = await Users.findOneAndUpdate(
      { _id: id },
      { $inc: { progress: direction } },
      { new: true }
    );
  }
  return user;
};

module.exports = setProgressUser;
