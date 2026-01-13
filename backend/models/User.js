const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    role: {
      type: String,
      enum: ["seller", "designer", "buyer", "admin"],
      required: true,
    },

    // Only for designers
    portfolio: {
      type: [String], // image URLs
      default: [],
    },

    specialization: {
      type: [String], // e.g. ["Denim", "Embroidery"]
      default: [],
    },

    location_hub: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
