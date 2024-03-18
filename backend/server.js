
require('dotenv').config()

const mongoose = require('mongoose')
const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));


//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})




app.use(express.urlencoded({ extended: true }));
app.use(initRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("connected to db and listening on port",process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
})






