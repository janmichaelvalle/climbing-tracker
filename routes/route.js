const express = require("express");
const routeController = require("../controllers/routeController");
const {verify, verifyAdmin} = require("../auth");

const router = express.Router();

router.post("/", routeController.addRoute);






module.exports = router;