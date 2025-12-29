const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: String,
    city: String,
    address: String,
    phone: String,
    description: String,
    numReviews: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    isApproved: { type: Boolean, default: false }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Business", businessSchema);
