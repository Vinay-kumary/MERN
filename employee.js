const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  image: String,
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  designation: { type: String, required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);
