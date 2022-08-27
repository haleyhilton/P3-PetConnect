const { gql } = require('apollo-server-express');

// Insert typeDefs here between the `` marks - schema definition language
// Exclamation point means required
// This page mirrors the models from the model folder.
// Queries are for your Get Routes
// Mutations are for your POST/PUT/DELETE Routes

const typeDefs = gql`
  type Pet {
    _id: ID!
    name: String!
    age: int
    breed: String!
    sex: String
    size: String
    color: String
    description: String
    for_sale: Boolean
    media: [dogMediaSchema]
    lastUpdated: String
  }

   type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
    first_name: String!
    last_name: String!
    date_of_birth: String!
    zip_code: int!
    media: [userMediaSchema]
    pet: [Pet]
    post: [Post]
    lastUpdated: String
  }

  type Post {
    _id: ID!
    subject: String!
    body: String!
    lastUpdated: String
  }

  type Query {
    user: [User]
    pet: [Pet]
    breed(breed: string!): [Pet]
    post(_id: String!): [Post]
  }
  
  type Mutation {
    addUser(_id: ID!, username: String!, password: String!, email: String!, first_name: String!, last_name: String!, date_of_birth: String!, zip_code: int!): User 
  }
`;

module.exports = typeDefs;
