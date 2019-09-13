const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  imgPath: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  size: { type: Number, required: true },
  brand: { type: String, required: true },
  gender: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;


//gender options are male, female, unisex