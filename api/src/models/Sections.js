const mongoose = require("mongoose");

const SectionsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      default: "",
    },
  },
  { timestamps: true }
);

const Sections = mongoose.model("sections", SectionsSchema);

module.exports = Sections;
