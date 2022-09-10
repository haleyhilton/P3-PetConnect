// Insert models once created below
const { Pet, User, Messages, Post } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const removeDuplicates = require('../utils/removeDuplicates');
const { eventNames } = require('../models/Messages');

// This essentially replaces routes and controllers.
// Query = Get Routes
// Mutations = POST/PUT/DELETE Routes


const resolvers = {
  Query: {
    // Find one user
    oneUser: async (parent, { profileId }) => {
      return User.findOne({ _id: profileId }).populate('pet').populate('post').populate('messages');
    },
    //for use on search page for links
    oneUserByPetId: async (parent, { petId }) => {
      return User.findOne({pet: { _id: petId} });
    },
    onePet: async (parent, { profileId }) => {
      return Pet.findOne({ _id: profileId });
    },
    onePetName: async (parent, { name }) => {
      return Pet.findOne({ name: name });
    },
    viewUserPictures: async (parent, { profileId }) => {
      return User.findOne({ _id: profileId });
    },
    // Find All Users
    user: async () => {
      return User.find({}).populate('pet').populate('post').populate('messages');
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
    petSearch: async (parent, { search, age, breed, sex, size, color, for_sale }) => {
      console.log(`Input: search: ${search}, age: ${age}, breed: ${breed}, sex: ${sex}, size: ${size}, color: ${color}, for_sale: ${for_sale}`);

      //if search term exists use it
      if (search) {
        //create a regex for the search term
        const searchRegex = new RegExp(`[\s\S]*${search}`);
        //check all String fields seperately
        const nameSearch = await Pet.find({ 'name': { $regex: searchRegex, $options: 'i' } });
        const breedSearch = await Pet.find({ 'breed': { $regex: searchRegex, $options: 'i' } });
        const sexSearch = await Pet.find({ 'sex': { $regex: searchRegex, $options: 'i' } });
        const sizeSearch = await Pet.find({ 'size': { $regex: searchRegex, $options: 'i' } });
        const colorSearch = await Pet.find({ 'color': { $regex: searchRegex, $options: 'i' } });
        const descSearch = await Pet.find({ 'description': { $regex: searchRegex, $options: 'i' } });

        const all = nameSearch.concat(breedSearch, sexSearch, sizeSearch, colorSearch, descSearch);
        const allNoDups = removeDuplicates(all);

        //now use filter() to implement filters
        const allFiltered = allNoDups.filter(function(item) {
          let ageFiltered;
          (age === null) ? ageFiltered = true : ageFiltered = false;
          if (!ageFiltered) {
            (item.age === age) ? ageFiltered = true : ageFiltered = false;
          };

          let breedFiltered;
          (breed === null) ? breedFiltered = true : breedFiltered = false;
          if (!breedFiltered) {
            (item.breed === breed) ? breedFiltered = true : breedFiltered = false;
          };

          let sexFiltered;
          (sex === null) ? sexFiltered = true : sexFiltered = false;
          if (!sexFiltered) {
            (item.sex === sex) ? sexFiltered = true : sexFiltered = false;
          };

          let sizeFiltered;
          (size === null) ? sizeFiltered = true : sizeFiltered = false;
          if (!sizeFiltered) {
            (item.size === size) ? sizeFiltered = true : sizeFiltered = false;
          };

          let colorFiltered;
          (color === null) ? colorFiltered = true : colorFiltered = false;
          if (!colorFiltered) {
            (item.color === color) ? colorFiltered = true : colorFiltered = false;
          };

          let forSaleFiltered;
          (for_sale === null) ? forSaleFiltered = true : forSaleFiltered = false;
          if (!forSaleFiltered) {
            (item.for_sale === for_sale) ? forSaleFiltered = true : forSaleFiltered = false;
          };

          return (ageFiltered && breedFiltered && sexFiltered && sizeFiltered && colorFiltered && forSaleFiltered);
        });

        return allFiltered;
      };

      //if search term wasn't passed in, do a normal Pet.find using all the filters
      //since some filters might be null, optionally add them to the find object based on their values
      let findAsObject = {};
      if (age) {findAsObject.age = age};
      if (breed) {findAsObject.breed = breed};
      if (sex) {findAsObject.sex = sex};
      if (size) {findAsObject.size = size};
      if (color) {findAsObject.color = color};
      if (for_sale !== null) {findAsObject.for_sale = for_sale};
      //finally pass the find object into the Pet.find call and return that
      const filteredResults = await Pet.find(findAsObject);
      return filteredResults;
    },
    breed: async (parent, { breed }) => {
      return Pet.findAll({ 'breed': `${breed}` });
    },
  },
  Mutation: {
    // Adds new user to database
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    addPetInfo: async (parent, { name, age, breed, sex, size, color, description }) => {
      const pet = await Pet.create({ name, age, breed, sex, size, color, description });
      return pet;
    },
    addPetPicture: async (parent, { petId, media }) => {
      return Pet.findOneAndUpdate(
        { _id: petId },
        {
          $addToSet: { media: { url: media } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    // See typedefs for what specific fields it needs. Media and Pets are not included
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user with this username found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    addProfilePicture: async (parent, { profileId, media }) => {
      return User.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { media: { url:  media } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addPet: async (parent, { profileId, pet }) => {
      return User.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { pet: pet },
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
            messages: newMessage
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
              messages: newMessage
            },
          },
          {
            new: true,
          }
        );
        console.log(newMessage)
        return newMessage;
    },
    deleteMessage: async (parent, args) => {
      const deletedMessage = await User.findOneAndUpdate(
        { _id: args._id },
        {
          $pull: { messages: args.messageId } 
        },
        {
          new: true
        }
      ).populate('messages');

      return deletedMessage
    }
  },
};

module.exports = resolvers;
