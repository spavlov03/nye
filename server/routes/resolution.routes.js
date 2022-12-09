const ResolutionController = require('../controllers/resolution.controllers'); 
module.exports = (app) => { 
  app.post('/api/resolution',ResolutionController.createResolution); 
  app.get('/api/resolutions',ResolutionController.getResolutions); 
  app.get('/api/resolution/:id',ResolutionController.getOneResolution);
  app.delete('/api/resolution/:id',ResolutionController.deleteResolution);
  app.put('/api/resolution/:id',ResolutionController.updateResolution);

}