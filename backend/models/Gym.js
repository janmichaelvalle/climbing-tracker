const mongoose = require("mongoose");

const gymSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // Location details of the gym
  location: {
    type: String,
    required: true,
  },
  // Array of route objects
  routes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Route",
    },
  ],
  // Array of user IDs who are members of this gym
  members: [
    { 
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" 
    }
  ],
  created_at: {
     type: Date, 
     default: Date.now 
    },
});

module.exports = mongoose.model("Gym", gymSchema);
