require('dotenv').config()

const mongoose = require('mongoose')

const express = require('express');
const multer = require('multer');
const upload = multer({dest:'uploads/'});
//express app
const app = express();

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.get('/',(req,res) =>{
  res.send('Hello World')
})

app.post('/api/upload',upload.single('file'),(req,res)=>{
  res.json(req.file);
});



mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("connected to db and listening on port",process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })




