const express = require('express')
const router = express.Router();
const {getAllPlants,insertPlant} = require('../controller/plantController')

router.post('/',getAllPlants) 

router.post('/insert',insertPlant)

module.exports = router