import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = new mongoose.model("User", userSchema);

module.exports = userModel;
