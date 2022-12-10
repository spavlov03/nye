const Resolution = require('../models/resolution.model'); 
module.exports = {
  createResolution: (req,res) => {
    Resolution.create(req.body)
    .then(resolution => res.json(resolution))
    .catch(err=>res.status(400).json(err))
  },
  getResolutions: (req,res) => { 
    Resolution.find(req.body).sort({"type":1})
      .then(resolution => res.json(resolution))
      .catch(err=> res.json(err))
  }, 
  getOneResolution: (req,res) => { 
    Resolution.findOne({_id:req.params.id})
    .then(resolution => res.json(resolution))
    .catch(err=> res.json(err))
  }, 
  deleteResolution: (req,res) => {
    Resolution.deleteOne({_id:req.params.id})
    .then(resolution => res.json(resolution))
    .catch(err=> res.json(err))
  }, 
  updateResolution: (req,res) => { 
    Resolution.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then(resolution => res.json(resolution))
    .catch(err=> res.status(400).json(err))
  }
}
// module.exports.createResolution = (request,response) => {
//   Resolution.create(request.body)
//     .then( resolution => response.json(resolution))
//     .catch(err => response.json(err))
// };
// module.exports.getResolutions = (req,res) => {
//   Resolution.find({})
//     .then( resolution => {
//       console.log(resolution);
//       res.json(resolution)})
//     .catch( err => {
//       console.log(err);
//       res.json(err)})
// }