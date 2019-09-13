const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newArrivalSchema = new Schema({
  name: { type: String, required: true },
  imgPath: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  size: { type: Number, required: true },
  brand: { type: String, required: true },
  gender: { type: String, required: true }
});

const NewArrival = mongoose.model("NewArrival", newArrivalSchema);

module.exports = NewArrival;


//gender options are male, female, unisex