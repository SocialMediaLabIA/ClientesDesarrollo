const { Client } = require("../../db");

const postClient = async (name) => {
  const newClient = await Client.create({ name });
  return newClient;
};

module.exports = { postClient };
