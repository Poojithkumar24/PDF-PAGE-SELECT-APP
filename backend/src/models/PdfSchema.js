const mongoose = require('mongoose');

const PdfDetailsSchema = new mongoose.Schema({
  pdf: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Exporting the model correctly
module.exports = mongoose.model("PdfDetails", PdfDetailsSchema);
