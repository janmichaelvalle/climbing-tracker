require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// *REQUIRED ROUTES
const userRoutes = require("./routes/user");
const routeRoutes = require("./routes/route");
const climbingHistoryRoutes = require("./routes/climbingHistory")


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const port = 4000;
mongoose.connect(process.env.URI)
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

// *USE ROUTES
app.use("/users", userRoutes);
app.use("/routes", routeRoutes);
app.use("/climbingHistory", climbingHistoryRoutes);


if(require.main === module){
	// "process.env.PORT || port" will use the environment variable if it is avaiable OR will used port 4000 if none is defined
	app.listen(process.env.PORT || port, () => {
		console.log(`API is now online on port ${process.env.PORT || port}`)
	});
}