const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const InfoSchema = new Schema({
  patientName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  BMI: { type: Number, required: true },
  patientDoctor: { type: String, required: true },
  description: String
});

module.exports = mongoose.model("info", InfoSchema);
