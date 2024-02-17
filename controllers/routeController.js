const Route = require("../models/Route");
const ClimbingHistory = require("../models/ClimbingHistory");
const User = require("../models/User");

// * ADD ROUTE

module.exports.addRoute = (req, res) => {
  let newRoute = new Route({
    grade: req.body.grade,
    type: req.body.type,
    color: req.body.color,
    location: req.body.location,
    setter: req.body.setter,
  });
  return newRoute.save().then((savedRoute) => {
    res
      .status(201)
      .send({ message: "New route created", savedRoute: savedRoute });
  });
};

// * UPDATE ROUTE
module.exports.updateRoute = (req, res) => {
  const routeId = req.params.routeId;

  let updatedRoute = {
    grade: req.body.grade,
    type: req.body.type,
    color: req.body.color,
    location: req.body.location,
    setter: req.body.setter,
  };

  Route.findByIdAndUpdate(routeId, updatedRoute, { new: true })
    .then((updatedRoute) => {
      if (!updatedRoute) {
        return res.status(404).send({ error: "Route not found" });
      }
      return res.status(200).send({
        message: "Route updated successfully",
        updateRoute: updatedRoute,
      });
    })
    .catch((err) => {
      console.error("Error in updating the route: ", err);
      return res.status(500).send({ error: "Error in updating the route." });
    });
};

// **ARCHIVE ROUTE
module.exports.archiveRoute = (req, res) => {
  const routeId = req.params.routeId;
  Route.findByIdAndUpdate({ _id: routeId }, { isActive: false }, { new: true })
    .then((archiveRoute) => {
      if (!archiveRoute) {
        return res.status(204).send({ errr: "Route not found" });
      } else {
        return res.status(200).send({
          message: "Route archived successfully",
          archiveRoute: archiveRoute,
        });
      }
    })
    .catch((err) => {
      console.log("Error in archiving the route", err);
      return res.status(500).send({ error: "Error archiving the route" });
    });
};

// * GET ALL ROUTES
module.exports.getRoutes = (req, res) => {
  Route.find({})
    .then((allRoutes) => {
      if (allRoutes.length > 0) {
        return res.status(200).send({
          allRoutes: allRoutes,
        });
      } else {
        res.status(200).send({ message: "No routes found" });
      }
    })
    .catch((err) => {
      console.log("Error finding all routes", err);
      return res.status(500).send({ error: "Error getting all routes" });
    });
};

// * FILTER BY GRADE & TYPE
module.exports.filterRoutes = (req, res) => {
  const grade = req.body.grade;
  const type = req.body.type;
  Route.find({ grade: grade })
    .then((filteredRoutes) => {
      if (filteredRoutes.length > 0) {
        return res.status(200).send({
          filteredRoutes: filteredRoutes,
        });
      } else {
        res.status(200).send({ message: "No routes found" });
      }
    })
    .catch((err) => {
      console.log("Error finding all routes", err);
      return res.status(500).send({ error: "Error getting all routes" });
    });
};

// * SEND ROUTE
module.exports.sentRoute = (req, res) => {
  const routeId = req.params.routeId;
  const userId = req.user.id;

  let newSend = new ClimbingHistory({
    user: userId,
    route: routeId,
    status: "sent",
  });
  // Save the climbing history entry in the DB
  newSend
    .save()
    .then((savedSent) => {
      User.findByIdAndUpdate(
        userId,
        // Add the climbing history entry's ID to the climbing_history array
        { $push: { climbing_history: savedSent._id } },
        { new: true }
      )
      // TODO Push user_id to "completed_by" array in routes when a user sends a climb
        .then(() => {
          res
            .status(201)
            .send({
              message: "Congratulations! Route sent!",
              savedSent: savedSent,
            });
        })
        .catch((userUpdateError) => {
          console.error(
            "Error updating user's climbing history array:",
            userUpdateError
          );
          res
            .status(500)
            .json({ error: "Error updating user's climbing history array" });
        });
    })
    .catch((saveError) => {
      console.error("Error saving climbing history entry:", saveError);
      res.status(500).json({ error: "Error saving climbing history entry" });
    });
};
