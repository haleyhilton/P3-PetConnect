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
  sent_by: {
    type: String,
  },
  receiverId: {
    type: String,
    required: true,
  },
  received_by: {
    type: String,
  },
  lastMessage: {
    type: String,
  },
  lastUpdated: { 
    type: String, 
  },
},);

const Messages = model('Messages', messageSchema);

module.exports = Messages;


