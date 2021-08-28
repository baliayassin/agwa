const express = require('express')
require('dotenv').config();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const connectDB = require('./config/db')
const plantRoutes = require('../backend/routes/plantRoute')
const cors = require('cors')

connectDB();
const app = express()
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json()); 
app.use(cors())
  app.use(express.json());
  app.use('/api/plants/',plantRoutes)



  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Example app listening at http://192.168.1.112:${PORT}`)
  })