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

  const dummyRoutes = 
  [{"grade":"5pie","color":"white","type":"toprope","location":"C01"},
  {"grade":"3pie","color":"brown","type":"toprope","location":"C02"},
  {"grade":"4pie","color":"blue","type":"lead","location":"C03"},
  {"grade":"5pie","color":"brown","type":"toprope","location":"C04"},
  {"grade":"1pie","color":"purple","type":"bouldering","location":"C05"},
  {"grade":"4pie","color":"brown","type":"toprope","location":"C06"},
  {"grade":"6pie","color":"blue","type":"toprope","location":"C07"},
  {"grade":"1pie","color":"red","type":"lead","location":"C08"},
  {"grade":"4pie","color":"pink","type":"lead","location":"C09"},
  {"grade":"6pie","color":"pink","type":"lead","location":"C10"},
  {"grade":"3pie","color":"purple","type":"bouldering","location":"C01"},
  {"grade":"1pie","color":"purple","type":"lead","location":"C02"},
  {"grade":"3pie","color":"yellow","type":"lead","location":"C03"},
  {"grade":"5pie","color":"white","type":"lead","location":"C04"},
  {"grade":"2pie","color":"yellow","type":"lead","location":"C05"},
  {"grade":"4pie","color":"yellow","type":"lead","location":"C06"},
  {"grade":"1pie","color":"pink","type":"bouldering","location":"C07"},
  {"grade":"1pie","color":"purple","type":"toprope","location":"C08"},
  {"grade":"4pie","color":"white","type":"toprope","location":"C09"},
  {"grade":"5pie","color":"purple","type":"bouldering","location":"C10"},
  {"grade":"1pie","color":"white","type":"lead","location":"C01"},
  {"grade":"4pie","color":"red","type":"toprope","location":"C02"},
  {"grade":"6pie","color":"black","type":"toprope","location":"C03"},
  {"grade":"2pie","color":"yellow","type":"lead","location":"C04"},
  {"grade":"4pie","color":"red","type":"toprope","location":"C05"},
  {"grade":"4pie","color":"purple","type":"bouldering","location":"C06"},
  {"grade":"4pie","color":"red","type":"bouldering","location":"C07"},
  {"grade":"4pie","color":"red","type":"toprope","location":"C08"},
  {"grade":"2pie","color":"black","type":"toprope","location":"C09"},
  {"grade":"1pie","color":"white","type":"bouldering","location":"C10"}]
  

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