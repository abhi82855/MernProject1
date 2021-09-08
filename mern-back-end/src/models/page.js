const mongoose = require("mongoose");
const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    banners: [
      {
        img: {
          type: String,
        },
        navigationTo: { type: String },
      },
    ],
    products: [
      {
        img: {
          type: String,
        },
        navigationTo: { type: String },
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    createdBy: {
      type: mongoose,
      ref: "User",
      required: true,
    },
  },
  { timestamp: true }
);
