const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String, // AI detected e.g. "Denim Jacket"
      required: true,
    },

    status: {
      type: String,
      enum: [
        "received",
        "matching",
        "under_design",
        "quality_check",
        "ready_for_sale",
      ],
      default: "received",
    },

    images: {
      original_url: {
        type: String,
        required: true,
      },
      upcycled_url: {
        type: String,
      },
    },

    owner_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    designer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    impact_metrics: {
      water_saved: {
        type: Number,
        default: 0,
      },
      carbon_reduced: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", ItemSchema);
