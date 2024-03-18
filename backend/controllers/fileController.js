const PdfDetails = require('../models/PdfSchema')

const uploadPdf = async(req,res)=>{
  try{
    new PdfDetails({
      pdf:req.file.filenames,
      name:req.body.name
    })

  }catch(error){
    res.status(400).send(erro.mesaage)
    console.log(error)
  }
}