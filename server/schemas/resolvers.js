// Insert models once created below
const { Pet, User, Messages, Post } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

// This essentially replaces routes and controllers.
// Query = Get Routes
// Mutations = POST/PUT/DELETE Routes


const resolvers = {
  Query: {
    // Find All Users
    user: async () => {
      return User.find({}).populate('pet').populate('post');
    },
    // Find messages corresponding to sending user id to have history of message conversation
    userMessages: async (parent, args) => {
     const messages = await Messages.find({ receiverId: args.receiverId })
     return messages
    },
    // Find All Pets
    // We can use this query for searching for specific requirements like breed, size, etc.
    pet: async () => {
      return Pet.find({});
    },
    breed: async (parent, { breed }) => {
      return Pet.findAll({ 'breed': `${breed}` });
    },
  },
  Mutation: {
    // Adds new user to database
    // See typedefs for what specific fields it needs. Media and Pets are not included
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const newUser = await User.create(args);
      return newUser;
    },
    addProfilePicture: async (parent, { userName, media }) => {
      return User.findOneAndUpdate(
        { username: userName },
        {
          $addToSet: { media: media },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addPet: async (parent, { userName, pet }) => {
      return User.findOneAndUpdate(
        { username: userName },
        {
          $addToSet: { pet: Pet.create(pet) },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    createMessage: async (parent, args) => {
      const newMessage = await Messages.create(args);

      const addToSender = await User.findOneAndUpdate(
        { _id: args.senderId },
        {
          $addToSet: {
            messages: newMessage._id
          },
        },
        {
          new: true,
        }
        );
        const addToReceiver = await User.findOneAndUpdate(
          { _id: args.receiverId },
          {
            $addToSet: {
              messages: newMessage._id
            },
          },
          {
            new: true,
          }
        );
        return newMessage;
    }
  },
};

module.exports = resolvers;
