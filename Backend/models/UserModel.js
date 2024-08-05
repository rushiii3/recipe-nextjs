const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the User schema
const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
  savedRecipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
  profileImageURL: String,
  bio: String,
  socialLinks: {
    website: String,
    twitter: String,
    instagram: String,
  },
});

// Middleware to update `updatedAt` field before save
UserSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the User model
const User = mongoose.model("User", UserSchema);

module.exports = User;
