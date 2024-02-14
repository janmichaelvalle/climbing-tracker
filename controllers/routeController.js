const Route = require("../models/Route");

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