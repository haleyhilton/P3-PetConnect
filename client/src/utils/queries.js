import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query User {
  user {
    username
    password
    email
    first_name
    last_name
    date_of_birth
    zip_code
  }
}
`;

export const QUERY_ONE_USER = gql`
query oneUser($id: ID!) {
  oneUser(_id: $id) {
    _id
    username
    password
    email
    first_name
    last_name
    date_of_birth
    zip_code
    media {
      _id
      url
    }
    profilePicture
    pet {
      _id
      name
      age
      breed
      sex
      size
      color
      description
      for_sale
      media {
        _id
        url
      }
      lastUpdated
    }
    post {
      _id
      subject
      body
      lastUpdated
    }
    lastUpdated
    messages {
      _id
      messageText
      senderId
      sent_by
      receiverId
      received_by
      lastMessage
      lastUpdated
    }
  }
}
`;

export const QUERY_USER_PICTURES = gql`
query ProfilePictures {
  user {
    username
    media {
      url
    }
    profilePicture
  }
}
`;

export const QUERY_USER_MESSAGES = gql`
query userMessages($receiverId: String!) {
  userMessages(receiverId: $receiverId) {
    _id
    messagesText
    senderId
    receiverId
    lastMessage
  }
}
`;
