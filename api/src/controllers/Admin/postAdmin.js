const { Admin } = require("../../db");

const postAdmin = async (name) => {
  const newAdmin = await Admin.create({ name });
  return newAdmin;
};

module.exports = { postAdmin };
