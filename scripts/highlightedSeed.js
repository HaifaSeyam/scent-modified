const mongoose = require("mongoose");
const db = require('../models')


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/perfumes"
  );

const highlighted = [
    {
        name: 'Aerin',
        imgPath: './assets/images/aerin.jpg',
        price: 99.99,
        description: 'This is the description of the perfume. Replace with some kind of explanation of the notes of the fragrance.',
        size: 50,
        brand: 'Aerin',
        gender: 'female',

    },
    {
        name: 'Jaguar',
        imgPath: './assets/images/jaguar.jpg',
        price: 139.99,
        description: 'This is the description of the perfume. Replace with some kind of explanation of the notes of the fragrance.',
        size: 110,
        brand: 'Jaguar',
        gender: 'male',

    },
    {
        name: 'Jeanne',
        imgPath: './assets/images/jeanne-lanvin.jpg',
        price: 119.99,
        description: 'This is the description of the perfume. Replace with some kind of explanation of the notes of the fragrance.',
        size: 110,
        brand: 'Jeanne Lanvin',
        gender: 'female',

    },
    {
        name: 'Si',
        imgPath: './assets/images/si.jpg',
        price: 59.99,
        description: 'This is the description of the perfume. Replace with some kind of explanation of the notes of the fragrance.',
        size: 75,
        brand: 'Giorgio Armani',
        gender: 'female',

    }
]

db.Highlighted
  .remove({})
  .then(() => db.Highlighted.collection.insertMany(highlighted))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });