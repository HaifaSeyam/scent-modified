const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  name: { type: String, required: true },
  imgPath: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  size: { type: Number, required: true },
  brand: { type: String, required: true },
  gender: { type: String, required: true },
  userId: { type: String, required: true }
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;


//gender options are male, female, unisex