const Pages = require("../../models/Pages");

const postPages = async (body) => {
  const pages = await Pages.create(body);
  return pages;
};

module.exports = postPages;
