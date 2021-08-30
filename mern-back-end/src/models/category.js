const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    categoryImage: {
      type: String,
    },
    parentId: {
      type: String,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Category", categorySchema);
