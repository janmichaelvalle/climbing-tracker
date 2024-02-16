const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
  // Difficulty grade of the route (e.g., V0, V1, V2, etc.)
  grade: {
     type: String,
     required: true, 
    },
  // Type of route (e.g., boulder, top rope, lead)
  type: {
     type: String,
     required: true, 
    },
  // Color tag / hold color associated with the route for easy identification
  color: {
     type: String, 
     required: true, 
    },
  // Location details of the route within the gym (e.g., zone, wall)
  location: {
     type: String,
     required: true, 
    },
  // ID of the user who set the route
  setter: {
     type: mongoose.Schema.Types.ObjectId, 
     ref: "User",
    },
  // If route is active already or not
  isActive: {
    type: Boolean,
    default: true
  },
  //  Array of user IDs who have completed this route
  completed_by: [
    { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User" }
  ],
  // Timestamp for when the route was added to the gym
  created_at: {
     type: Date, 
     default: Date.now 
    },
});

module.exports = mongoose.model("Route", routeSchema);
