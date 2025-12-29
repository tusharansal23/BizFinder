const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema(
  {
    keyword: {
      type: String,
      required: true,
      unique: true
    },
    count: {
      type: Number,
      default: 1
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Search", searchSchema);
