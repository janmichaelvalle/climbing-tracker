const ClimbingHistory = require("../models/ClimbingHistory")

// // * SEND ROUTE
// module.exports.sentRoute = (req, res) => {
//   console.log(req.params.routeId)
//   console.log(req.user.id)
//   const routeId = req.params.routeId;
//   const userId = req.user.id;

//   let newSend = new ClimbingHistory({
//     user: userId,
//     route: routeId,
//     status: "sent"
//   });
//   return newSend.save()
//   .then((savedSent) => {
//     res.status(201).send({message: "Congratulations! Route sent!", savedSent: savedSent})
//   })
// }