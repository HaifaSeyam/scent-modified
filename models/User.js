const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  tokenId: {
    type: String,
    default: ""
  },
  isSubscribed: {
    type: Boolean,
    default: false
  },
  sampleSelected: {
    type: Boolean,
    default: false
  },
  selectionDate: {
    type: Number
  },
  limitDate: {
    type: Number
  },
  favorite: [{
    type: Schema.Types.ObjectId,
    ref: "Favorite"
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;

