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
  // Optional comments or notes about the climb
  comments: {
    type: String,
  },
  // User's rating or satisfaction with the climb
  user_rating: {
    type: Number,
  },
  /* Indicates if the route is being projected
    ChatGPT: The status field is added to represent the indication of whether the user has finished the route ('finished') or is currently projecting it ('projecting'). It's defined as a string with an enum constraint, ensuring that only specific values are allowed ('finished' or 'projecting'). The default value is set to 'projecting', meaning if no status is specified, the route is assumed to be in the projecting status. 
   */
  status: { type: String, enum: ['sent', 'projecting'], default: 'projecting' }, 
});

module.exports = mongoose.model("ClimbingHistory", climbingHistorySchema);
