if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
  }
  
  
  const express = require('express')
  const app = express()
  const mongoose=require("mongoose")
  const cors=require("cors")
  
  const userRoutes = require('./routes/user.js')
//   const documentRoutes= require('./routes/document.js')
  
  const DATABASE_URL = 'mongodb+srv://Janarthanan:jana@car-service.bx6kur0.mongodb.net/?retryWrites=true&w=majority'
  mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
  .then( () => {
      console.log("Connection open")
  }).catch(err => {
      console.log("OOPS !! ERROR")
  })
  
  app.use(express.json({extended:true}))
  app.use(express.urlencoded({ extended: true }))
  
  
  app.use(cors())
  app.use('/user',userRoutes)
//   app.use('/doc',documentRoutes)
  app.get('/',(req,res)=>{
      res.send('Car Service')
  })
  const port = process.env.PORT || 4000
  app.listen(port,()=> console.log("server is running"))