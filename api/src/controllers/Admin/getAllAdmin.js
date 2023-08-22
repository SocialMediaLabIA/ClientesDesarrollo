const { Admin } = require("../../db");

const getAllAdmin = async () => {
  const admin = await Admin.findAll();
  return admin;
};

module.exports = { getAllAdmin };
