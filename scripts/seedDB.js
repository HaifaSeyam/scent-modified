const mongoose = require("mongoose");
const db = require('../models')

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/perfumes"
  );

const perfumes = [
    {
        name: 'Bombshell',
        imgPath: './assets/images/victoria-secret-bombshell.jpg',
        price: 59.99,
        description: 'This is the description of the perfume. Replace with some kind of explanation of the notes of the fragrance.',
        size: 50,
        brand: 'Victoria Secret',
        gender: 'female',

    },
    {
        name: 'Essential',
        imgPath: './assets/images/lacost-essential.jpg',
        price: 149.99,
        description: 'This is the description of the perfume. Replace with some kind of explanation of the notes of the fragrance.',
        size: 110,
        brand: 'Lacoste',
        gender: 'male',

    },
    {
        name: 'Sun di Gioia',
        imgPath: './assets/images/sun-di.jpg',
        price: 119.99,
        description: 'This is the description of the perfume. Replace with some kind of explanation of the notes of the fragrance.',
        size: 110,
        brand: 'Giorgio Armani',
        gender: 'female',

    },
    {
        name: 'Valentino',
        imgPath: './assets/images/valentino.jpg',
        price: 59.99,
        description: 'This is the description of the perfume. Replace with some kind of explanation of the notes of the fragrance.',
        size: 75,
        brand: 'Valentino',
        gender: 'female',

    },
    {
        name: 'L\'imperatrice',
        imgPath: './assets/images/dolce-and-gabbana-limperatrice.jpg',
        price: 139.99,
        description: 'This is the description of the perfume. Replace with some kind of explanation of the notes of the fragrance.',
        size: 100,
        brand: 'Dolce & Gabbana',
        gender: 'female',

    },
    {
        name: 'Hollister',
        imgPath: './assets/images/hollister.jpg',
        price: 119.99,
        description: 'This is the description of the perfume. Replace with some kind of explanation of the notes of the fragrance.',
        size: 75,
        brand: 'Hollister',
        gender: 'male',

    },
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

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(perfumes))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

