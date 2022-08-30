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
    age: Int
    breed: String!
    sex: String
    size: String
    color: String
    description: String
    for_sale: Boolean
    media: [PetMedia]
    lastUpdated: String
  }

  type PetMedia {
    _id: ID!
    url: String!
  }

  type UserMedia {
    _id: ID!
    url: String!
  }

   type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
    first_name: String!
    last_name: String!
    date_of_birth: String!
    zip_code: Int!
    media: [UserMedia]
    pet: [Pet]
    post: [Post]
    lastUpdated: String
    messages: [Messages]
  }

  type Messages {
    _id: ID!
    messagesText: String!
    senderId: String!
    receiverId: String!
    lastMessage: String
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: [User]
    pet: [Pet]
    breed(breed: String!): [Pet]
    post(_id: String!): [Post]
    userMessages(receiverId: String!): [Messages]
  }
  
  type Mutation {
    addUser(_id: ID!, username: String!, password: String!, email: String!, first_name: String!, last_name: String!, date_of_birth: String!, zip_code: Int!): User 
    login(username: String!, password: String!): Auth
    addPet(username: String!, pet: String!): User
    addProfilePicture(username: String!, media: String!): User
    createMessage(messageText: String!, senderId: String!, receiverId: String!, lastMessage: String): Messages
  }
`;

module.exports = typeDefs;
