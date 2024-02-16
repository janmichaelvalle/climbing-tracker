const express = require("express");
const routeController = require("../controllers/routeController");
const {verify, verifyAdmin} = require("../auth");

const router = express.Router();

router.post("/add", routeController.addRoute);

router.patch("/update/:routeId", routeController.updateRoute)

router.patch("/archive/:routeId", routeController.archiveRoute)




module.exports = router;