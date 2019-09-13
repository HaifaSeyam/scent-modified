const mongoose = require("mongoose");
const db = require('../models')

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/perfumes"
  );

  const newArrivals = [
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

    }
]

db.NewArrival
  .remove({})
  .then(() => db.NewArrival.collection.insertMany(newArrivals))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });