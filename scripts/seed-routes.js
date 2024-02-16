require("dotenv").config();
const mongoose = require("mongoose");
const Route = require("../models/Route");

// Connect to MongoDB
mongoose.connect("mongodb+srv://janmichaelvalle:admin@cluster0.ei4pysk.mongodb.net/climbing-tracker?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');

  const dummyRoutes = [
    {
      grade: '1pie',
      type: 'Top Rope',
      color: 'Red',
      location: 'Zone A, Wall 1'
    },
    {
      grade: '2pie',
      type: 'Boulder',
      color: 'Blue',
      location: 'Zone B, Wall 2'
    },
    {
      grade: '3pie',
      type: 'Lead',
      color: 'Green',
      location: 'Zone C, Wall 3'
    },
    {
      grade: '4pie',
      type: 'Top Rope',
      color: 'Yellow',
      location: 'Zone D, Wall 4'
    },
    {
      grade: '5pie',
      type: 'Boulder',
      color: 'Purple',
      location: 'Zone E, Wall 5'
    },
    {
      grade: '1pie',
      type: 'Lead',
      color: 'Orange',
      location: 'Zone F, Wall 6'
    },
    {
      grade: '2pie',
      type: 'Top Rope',
      color: 'Pink',
      location: 'Zone G, Wall 7'
    },
    {
      grade: '3pie',
      type: 'Boulder',
      color: 'Cyan',
      location: 'Zone H, Wall 8'
    },
    {
      grade: '4pie',
      type: 'Lead',
      color: 'Magenta',
      location: 'Zone I, Wall 9'
    },
    {
      grade: '5pie',
      type: 'Top Rope',
      color: 'LightGreen',
      location: 'Zone J, Wall 10'
    },
    {
      grade: '1pie',
      type: 'Boulder',
      color: 'LightBlue',
      location: 'Zone K, Wall 11'
    },
    {
      grade: '2pie',
      type: 'Lead',
      color: 'LightYellow',
      location: 'Zone L, Wall 12'
    },
    {
      grade: '3pie',
      type: 'Top Rope',
      color: 'LightPurple',
      location: 'Zone M, Wall 13'
    },
    {
      grade: '4pie',
      type: 'Boulder',
      color: 'LightCyan',
      location: 'Zone N, Wall 14'
    },
    {
      grade: '5pie',
      type: 'Lead',
      color: 'LightMagenta',
      location: 'Zone O, Wall 15'
    },
    // Add more dummy routes as needed
  ];
  

  // Insert dummy routes into the database
  Route.insertMany(dummyRoutes)
    .then(() => {
      console.log('Dummy routes inserted successfully');
      mongoose.connection.close();
    })
    .catch((err) => {
      console.error('Error inserting dummy routes:', err);
      mongoose.connection.close();
    });
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});