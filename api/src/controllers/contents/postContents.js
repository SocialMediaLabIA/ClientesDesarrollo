const Contents = require("../../models/Contents");

const postContents = async (body) => {
  const contents = await Contents.create(body);
  return contents;
};

module.exports = postContents;
