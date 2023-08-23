const mongoose = require("mongoose");

const ContentsSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      default: "",
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
    description: {
      type: String,
      required: true,
      default: "",
    },
    section_id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const Contents = mongoose.model("contents", ContentsSchema);

module.exports = Contents;
