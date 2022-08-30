const { Schema, model } = require('mongoose');


const messageSchema = new Schema({
  messageText: {
    type: String,
    required: true,
  },
  senderId: {
    type: String,
    required: true,
  },
  receiverId: {
    type: String,
    required: true,
  },
  lastMessage: {
    type: String,
  },
});

const Messages = model('Messages', messageSchema);

module.exports = Messages;


