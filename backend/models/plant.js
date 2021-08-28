const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({

    name:{
        type:String,
        
    },
    image:{
        type:String
    },
   
    
   
})

const plant = mongoose.model('plant',plantSchema);

module.exports = plant