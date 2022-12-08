const ResolutionController = require('../controllers/resolution.controllers'); 
module.exports = (app) => { 
  app.post('/api/resolution',ResolutionController.createResolution); 
  app.get('/api/resolutions',ResolutionController.getResolutions)

}