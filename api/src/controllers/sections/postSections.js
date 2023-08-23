const Sections = require("../../models/Sections");

const postSections = async (body) => {
  const sections = await Sections.create(body);
  return sections;
};

module.exports = postSections;
