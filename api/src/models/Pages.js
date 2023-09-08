const mongoose = require("mongoose");

const PagesSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "",
    },
    section: {
      type: Boolean,
      default: false,
    },
    video: {
      type: Boolean,
      default: false,
    },
    meet: {
      type: Boolean,
      default: false,
    },
    resume: {
      type: Boolean,
      default: false,
    },
    document: {
      type: Boolean,
      default: false,
    },
    videoSource: {
      type: String,
      default: "",
    },
    resumeText: {
      type: String,
      default: "",
    },
    meetImage: {
      type: String,
      default: "",
    },
    meetName: {
      type: String,
      default: "",
    },
    documentArray: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const Pages = mongoose.model("pages", PagesSchema);

module.exports = Pages;
