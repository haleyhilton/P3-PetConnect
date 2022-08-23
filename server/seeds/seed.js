const db = require('../config/connection');
const { Pet, User } = require('../models');

const userData = require('./userData.json');
const petData = require('./petData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Pet.deleteMany({});

  const users = await User.insertMany(userData);
  const pets = await Pet.insertMany(petData);

  console.log('Users seeded!');
  console.log('Pets seeded!');
  process.exit(0);
});
