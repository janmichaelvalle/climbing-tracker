const Route = require("../models/Route");

// * ADD ROUTE

module.exports.addRoute = (req, res) => {
  let newRoute = new Route({
    grade: req.body.grade,
    type: req.body.type,
    color: req.body.color,
    location: req.body.location,
    setter: req.body.setter   
  });
  return newRoute.save()
  .then((savedRoute) => {
    res.status(201).send({message: "New route created", savedRoute: savedRoute})
  })
}

// * UPDATE ROUTE
module.exports.updateRoute = (req, res) => {
  const routeId = req.params.routeId;

  let updatedRoute = {
    grade: req.body.grade,
    type: req.body.type,
    color: req.body.color,
    location: req.body.location,
    setter: req.body.setter   
  }

  Route.findByIdAndUpdate(routeId, updatedRoute, {new: true})
  .then(updatedRoute => {
    if(!updatedRoute) {
      return res.status(404).send({ error: 'Route not found'});
    }
    return res.status(200).send({ 
      message: 'Route updated successfully', 
      updateRoute: updatedRoute
  })
  })
  .catch(err => {
    console.error("Error in updating the route: ", err)
    return res.status(500).send({error: 'Error in updating the route.'})
    
});

}

// **ARCHIVE ROUTE
module.exports.archiveRoute = (req, res) => {
  const routeId = req.params.routeId;
  Route.findByIdAndUpdate({ _id: routeId }, {isActive: false}, {new: true})
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
}