const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'uploads/')
  },
  fileName: function(req,file,cb){
    let ext = path.extname(file.originalname)
    cb(null,Date.now()+ext)
  }
})

const uploadFile = multer({
  storage:storage,
  fileFilter:function(req,file,callback){
    if(file.mimetype == 'pdf'){
      callback(null,true)
    }
    else{
      console.log("only pdf should be uploaded")
      callback(null,false)
    }
  }
})

module.exports = uploadFile