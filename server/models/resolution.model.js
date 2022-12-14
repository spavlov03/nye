const mongoose = require('mongoose'); 
const ResolutionSchema = mongoose.Schema({
  name:{
    type:String,
    minLength: [3,"Name must be at least 3 characters"], 
    required: [true,"Name is required"]  
  }, 
  type:{
    type:String,
    minLength: [3,"Type must be at least 3 characters"], 
    required: [true,"Type is required"]  
  }, 
  description:{
    type:String,
    minLength: [3,"Description must be at least 3 characters"], 
    required: [true,"Description is required"]  
  } ,
  reward1: {
    type: String,
    required: [true, 'One reward is required.Tell me something cool!'],
    uniqueItems: true,
},
reward2: {
  type: String,
},
reward3: {
  type: String,
},

  
},{timestamps:true}); 

module.exports = mongoose.model("Resolution",ResolutionSchema);