const { Client } = require("../../db");

const getAllClient = async () => {
  const client = await Client.findAll();
  return client;
};

module.exports = { getAllClient };
