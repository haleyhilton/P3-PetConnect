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
    _id: ID
    url: String
  }

  type UserMedia {
    _id: ID
    url: String
  }

  type ProfileMedia {
    _id: ID
    url: String
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
    profilePicture: String
    pet: [Pet]
    post: [Post]
    lastUpdated: String
    messages: [Messages]
  }
  
  type Post {
    _id: ID!
    subject: String!
    body: String!
    lastUpdated: String
  }

  type Post {
    _id: ID!
    subject: String!
    body: String!
    lastUpdated: String
  }


  type Messages {
    _id: ID!
    messageText: String!
    senderId: String!
    sent_by: String
    receiverId: String!
    received_by: String
    lastMessage: String
    lastUpdated: String
  }

  type Post {
    _id: ID!
    subject: String!
    body: String!
    lastUpdated: String
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: [User]
    oneUser(_id: ID!): User
    pet: [Pet]
    petSearch(search: String, age: Int, breed: String, size: String, sex: String, color: String, for_sale: Boolean): [Pet]
    breed(breed: String!): [Pet]
    post(_id: String!): [Post]
    userMessages(receiverId: String!): [Messages]
    
  }
  
  type Mutation {
    addUser(_id: ID!, username: String!, password: String!, email: String!, first_name: String!, last_name: String!, date_of_birth: String!, zip_code: Int!): User 
    login(username: String!, password: String!): Auth
    addPet(username: String!, pet: String!): User
    addProfilePicture(username: String!, media: String!): User
    createMessage(messageText: String!, senderId: String!, sent_by: String, receiverId: String!, received_by: String lastMessage: String, lastUpdated: String): Messages
    deleteMessage(_id: ID!, messageId: String!): User
  }
`;

module.exports = typeDefs;
