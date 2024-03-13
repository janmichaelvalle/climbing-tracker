require("dotenv").config();
const mongoose = require("mongoose");
const Route = require("../models/Route");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://janmichaelvalle:admin@cluster0.ei4pysk.mongodb.net/climbing-tracker?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");

    const dummyRoutes = [
      { grade: "4pie", color: "brown", type: "toprope", location: "A01" },
      { grade: "5pie", color: "purple", type: "toprope", location: "A02" },
      { grade: "3pie", color: "pink", type: "toprope", location: "A03" },
      { grade: "5pie", color: "pink", type: "toprope", location: "A04" },
      { grade: "2pie", color: "brown", type: "toprope", location: "A05" },
      { grade: "3pie", color: "brown", type: "toprope", location: "A06" },
      { grade: "2pie", color: "red", type: "toprope", location: "A07" },
      { grade: "2pie", color: "yellow", type: "toprope", location: "A08" },
      { grade: "5pie", color: "brown", type: "toprope", location: "A09" },
      { grade: "5pie", color: "pink", type: "toprope", location: "A10" },
      { grade: "3pie", color: "green", type: "toprope", location: "A01" },
      { grade: "3pie", color: "green", type: "toprope", location: "A02" },
      { grade: "2pie", color: "red", type: "toprope", location: "A03" },
      { grade: "3pie", color: "brown", type: "toprope", location: "A04" },
      { grade: "2pie", color: "brown", type: "toprope", location: "A05" },
      { grade: "5pie", color: "red", type: "toprope", location: "A06" },
      { grade: "5pie", color: "white", type: "toprope", location: "A07" },
      { grade: "4pie", color: "yellow", type: "toprope", location: "A08" },
      { grade: "1pie", color: "red", type: "toprope", location: "A09" },
      { grade: "3pie", color: "blue", type: "toprope", location: "A10" },
      { grade: "1pie", color: "blue", type: "toprope", location: "A01" },
      { grade: "5pie", color: "red", type: "toprope", location: "A02" },
      { grade: "6pie", color: "purple", type: "toprope", location: "A03" },
      { grade: "4pie", color: "white", type: "toprope", location: "A04" },
      { grade: "4pie", color: "blue", type: "toprope", location: "A05" },
      { grade: "2pie", color: "purple", type: "toprope", location: "A06" },
      { grade: "3pie", color: "brown", type: "toprope", location: "A07" },
      { grade: "5pie", color: "blue", type: "toprope", location: "A08" },
      { grade: "2pie", color: "pink", type: "toprope", location: "A09" },
      { grade: "1pie", color: "pink", type: "toprope", location: "A10" },
    ];

    // Insert dummy routes into the database
    Route.insertMany(dummyRoutes)
      .then(() => {
        console.log("Dummy routes inserted successfully");
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error("Error inserting dummy routes:", err);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
