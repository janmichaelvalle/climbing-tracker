const express = require("express");
const routeController = require("../controllers/routeController");
const {verify, verifyAdmin} = require("../auth");

const router = express.Router();

router.post("/add", verify, verifyAdmin, routeController.addRoute);

router.patch("/update/:routeId", verify, verifyAdmin, routeController.updateRoute)

router.patch("/archive/:routeId", verify, verifyAdmin, routeController.archiveRoute)

router.get("/", routeController.getRoutes)

router.get("/filter", routeController.filterRoutes);

router.post("/:routeId/sent", verify, routeController.sentRoute);


module.exports = router;