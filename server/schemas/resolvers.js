// Insert models once created below
const { Pet, User } = require('../models');

const resolvers = {
  // GET CALLS
  Query: {
    query ExampleQuery {
      id
      users {
        username
        password
      }
    }
    
  },
  // POST CALLS
  // Mutation: {
  //   insert mutations
  // },
};

module.exports = resolvers;
