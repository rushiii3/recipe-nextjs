const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecipeSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  ingredients: [
    {
      sectionName: String,
      items: [
        {
          name: String,
          quantity: String,
        },
      ],
    },
  ],
  steps: [
    {
      stepNumber: Number,
      instruction: String,
    },
  ],
  authorId: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  tags: [String],
  imageURL: String,
});

// Middleware to update `updatedAt` field before save
RecipeSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the Recipe model
const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
