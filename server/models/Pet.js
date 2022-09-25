const { Schema, model } = require('mongoose');

// Defines sub document where the dog pictures will be stored.
const dogMediaSchema = new Schema({
  url: {
    type: String,
  },
});

const fileUploaderSchema = new Schema({
  filename: {
    type: String,
  },
  // mimetype: {
  //   type: String,
  // },
  // encoding: {
  //   type: String,
  // },
});

const petSchema = new Schema({
    // Attaches pet to user
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    breed: {
      type: String,
      required: true,
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
    files: [fileUploaderSchema],
});

const Pet = model('Pet', petSchema);

module.exports = Pet;
