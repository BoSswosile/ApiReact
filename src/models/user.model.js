const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      lowercase: true,
      maxLength: 50,
      minLength: 2,
    },
    lastName: {
      type: String,
      required: true,
      lowercase: true,
      maxLength: 50,
      minLength: 2,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      length: 50,
    },
    password: {
      type: String,
      required: true,
    },
    prestige: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
