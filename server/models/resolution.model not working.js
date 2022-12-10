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
  rewards: {
    type: String,
    required: [true, 'Tell me something cool!'],
    uniqueItems: true,
    // minItems:2
    // minItems: {value: 1, message: 'Tell me more than 1'}
}
  
},{timestamps:true}); 

module.exports = mongoose.model("Resolution",ResolutionSchema);