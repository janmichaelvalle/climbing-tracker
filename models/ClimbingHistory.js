const mongoose = require("mongoose");

const climbingHistorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },      
  // Identifier for the climbed route
  route: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Route",
    required: true,
  },
  // Date when the route was climbed
  date: {
    type: Date,
    default: Date.now,
  },
  // Time taken to climb the route (optional)
  time: {
    type: String,
  },
  // Difficulty level of the route (e.g., beginner, intermediate, advanced)
  difficulty: {
    type: String,
  },
  // Optional comments or notes about the climb
  comments: {
    type: String,
  },
  // User's rating or satisfaction with the climb
  user_rating: {
    type: Number,
  },
});

module.exports = mongoose.model("ClimbingHistory", climbingHistorySchema);
