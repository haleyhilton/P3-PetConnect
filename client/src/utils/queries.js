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
