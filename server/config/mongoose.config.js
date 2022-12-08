const mongoose = require('mongoose');

mongoose.set('strictQuery',false)

mongoose.connect("mongodb://localhost/nye",()=> {
  console.log('Connected to MongoDB!')
})

