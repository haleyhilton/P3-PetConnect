const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    // Attaches pet to user
    subject: {
        type: Number,
    },
    body: {
      type: Number,
    },
    lastUpdated: { 
      type: Date, 
      default: Date.now, 
    },
});

const Post = model('Post', postSchema);

module.exports = Post;
