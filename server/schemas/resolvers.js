// Insert models once created below
const { Pet, User } = require('../models');

// This essentially replaces routes and controllers.
// Query = Get Routes
// Mutations = POST/PUT/DELETE Routes

const resolvers = {
  Query: {
    // Find All Users
    user: async () => {
      return User.find({});
    },
    // Find All Pets
    // We can use this query for searching for specific requirements like breed, size, etc.
    pet: async () => {
      return Pet.find({});
    },
    breed: async (parent, { breed }) => {
      return Pet.findOne({ 'breed': `${breed}` });
    },
  },
  Mutation: {
    // Adds new user to database
    // See typedefs for what specific fields it needs. Media and Pets are not included
    addUser: async (parent, args) => {
      const newUser = await User.create(args);
      return newUser;
    },
  },
};

module.exports = resolvers;
