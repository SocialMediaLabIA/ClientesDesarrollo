const mongoose = require("mongoose");
const validator = require("validator");

const UsersSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      default: "",
    },
    name: {
      type: String,
      required: true,
      default: "",
    },
    lastname: {
      type: String,
      required: true,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Invalid email address"],
    },
    password: {
      type: String,
      required: true,
      default: "",
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    progress: {
      type: Number,
      required: true,
      default: 0,
    },
    content_references: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("users", UsersSchema);

module.exports = Users;
