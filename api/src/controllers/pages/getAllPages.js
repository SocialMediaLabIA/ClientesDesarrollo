const Pages = require("../../models/Pages");

const getAllPages = async () => {
  const pages = await Pages.find();

  return pages;
};

module.exports = getAllPages;
