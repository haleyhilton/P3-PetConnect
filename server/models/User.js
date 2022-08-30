const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt")


// Defines sub document where the profile pictures will be stored.
const userMediaSchema = new Schema({
  url: {
    type: String,
  },
});

// string, id, boolean, number
const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    zip_code: {
      type: Number,
      required: true,
    },
    // stores profile pictures
    media: [userMediaSchema],
    profilePicture: {
      type: String,
    },
    // attaches owner's pets
    pet: {
      type: Schema.Types.ObjectId,
      ref: "Pet",
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    lastUpdated: { 
      type: Date, 
      default: Date.now, 
    },
});


// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// const UserMedia = model('UserMedia', userMediaSchema);
const User = model('User', userSchema);

module.exports = User;