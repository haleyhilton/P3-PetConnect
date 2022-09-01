import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER_PHOTO = gql`
mutation AddUserPhoto($username: String!, $media: String!) {
    addProfilePicture(username: $username, media: $media) {
      media {
        url
      }
    }
  }
`;

export const CREATE_USER_MESSAGE = gql`
mutation createMessage($messageText: String!, $senderId: String!, $receiverId: String!, $lastMessage: String) {
  createMessage(messageText: $messageText, senderId: $senderId, receiverId: $receiverId, lastMessage: $lastMessage) {
    _id
    messagesText
    senderId
    receiverId
    lastMessage
  }
}
`;
