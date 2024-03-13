const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },

  lastName: {
    type: String,
    required: [true, "Last name is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
  },
  password: {
    type: String,
    require: [true, "Password is required"],
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  // Array of climbing history objects 
  climbing_history: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ClimbingHistory",
    },
  ],
  // Array of favorite route IDs
  favorite_routes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Route",
    },
  ],
  // Array of gym IDs where the user is a member
  joined_gyms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gym",
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
