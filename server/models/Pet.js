const { Schema, model } = require('mongoose');
const User = require('./User');

// Defines sub document where the dog pictures will be stored.
const dogMediaSchema = new Schema({
  url: {
    type: String,
  },
});

const petSchema = new Schema({
    // Attaches pet to user
    user: {
      type: MyObjectId, 
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    breed: {
      type: String,
    },
    sex: {
      type: String,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    description: {
      type: String,
    },
    for_sale: {
      type: Boolean,
    },
    media: [dogMediaSchema],
    lastUpdated: { 
      type: Date, 
      default: Date.now, 
    },
});

const Pet = model('Pet', petSchema);

module.exports = Pet;
