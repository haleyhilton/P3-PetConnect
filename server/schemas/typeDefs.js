const { gql } = require('apollo-server-express');

// Insert typeDefs here between the `` marks - schema definition language
// Exclamation point means required
const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    password: String!
    email: String!
    first_name: String!
    last_name: String!
  }

  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;
