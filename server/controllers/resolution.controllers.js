const Resolution = require('../models/resolution.model'); 
// module.exports = {
//   createResolution: ((req,res) => {
//     // const {name,type,description} = req.body; 
//     Resolution.create(req.body)
//     .then(resolution => res.json(resolution))
//     .catch(err=>res.status(400).json(err))
//   }),
//   getAllResolutions: (req,res) => { 
//     Resolution.find(req.body)
//       .then(resolution => res.json(resolution))
//       .catch(err=> res.json(err))
//   }
// }
module.exports.createResolution = (request,response) => {
  Resolution.create(request.body)
    .then( resolution => response.json(resolution))
    .catch(err => response.json(err))
};
module.exports.getResolutions = (req,res) => {
  Resolution.find({})
    .then( resolution => {
      console.log(resolution);
      res.json(resolution)})
    .catch( err => {
      console.log(err);
      res.json(err)})
}