const express = require("express");
const router = express.Router();
const uploadFile = require('../middleware/upload')
const {
    upload,  
} = require("../controllers/fileController");


router.post("/upload",uploadFile.single('file'),upload);


module.exports = router;