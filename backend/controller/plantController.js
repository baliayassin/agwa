const { response } = require('express');

const Plant = require('../models/plant')


const getAllPlants = async (req,res)=> {

    try{

       const plants = await Plant.find({});
       res.json(plants);
       console.log(plants)

    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"});
    }
}


const insertPlant = async (req,res)=> {

    var plant = new Plant({
        name: req.body.name,
        image: req.body.image,
       
        
      })
       
      plant.save(function (err, plant) {
        if (err) { return next(err) }
        res.json(201, plant)
      //  res.status(status).json(plant) 
      
      })
   

}

module.exports={
    getAllPlants,
    insertPlant
}