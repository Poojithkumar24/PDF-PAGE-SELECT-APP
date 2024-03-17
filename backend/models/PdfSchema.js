const mongoose = require('mongoose');

// Define PDF schema
const pdfSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  
  // Add more fields as needed
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create PDF model
const PDF = mongoose.model('PDF', pdfSchema);

module.exports = PDF;
