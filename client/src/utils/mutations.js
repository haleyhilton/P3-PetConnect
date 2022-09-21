import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        email
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
mutation createMessage($messageText: String!, $senderId: String!, $receiverId: String!, $sentBy: String, $receivedBy: String, $lastMessage: String, $lastUpdated: String) {
  createMessage(messageText: $messageText, senderId: $senderId, receiverId: $receiverId, sent_by: $sentBy, received_by: $receivedBy, lastMessage: $lastMessage, lastUpdated: $lastUpdated) {
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
`;

export const DELETE_USER_MESSAGE = gql`
mutation deleteMessage($id: ID!, $messageId: String!) {
  deleteMessage(_id: $id, messageId: $messageId) {
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

export const ADD_PET_TO_USER = gql`
mutation Mutation($profileId: String!, $pet: String!) {
  addPet(profileId: $profileId, pet: $pet) {
    pet {
      _id
    }
  }
}
`;

export const ADD_PICTURE_TO_PET = gql`
mutation Mutation($name: String!, $media: String!) {
  addPetPicture(name: $name, media: $media) {
    name
    media {
      url
    }
  }
}
`;

export const ADD_PET = gql`
mutation Mutation($name: String!, $age: String!, $breed: String!, $sex: String!, $size: String!, $color: String!, $description: String!) {
  addPetInfo(name: $name, age: $age, breed: $breed, sex: $sex, size: $size, color: $color, description: $description) {
    _id
    name
    age
    breed
    sex
    size
    color
    description
  }
}
`;

export const DELETE_ONE_PET=gql `mutation DeletePet($id: ID!) {
  deletePet(_id: $id) {
    _id
  }
}`

export const ADD_PICTURE_TO_PROFILE = gql`
mutation Mutation($profileId: String!, $media: String!) {
  addProfilePicture(profileId: $profileId, media: $media) {
    media {
      _id
      url
    }
  }
}
`;

export const ADD_PET_PICTURE = gql`
mutation Mutation($petId: String!, $media: String!) {
  addPetPicture(petId: $petId, media: $media) {
    _id
    media {
      _id
      url
    }
    name
  }
}
`;


export const EDIT_USER = gql`
mutation Mutation($profileId: ID!, $firstName: String!, $lastName: String!) {
  editUserInfo(profileId: $profileId, first_name: $firstName, last_name: $lastName) {
    _id
    first_name
    last_name
    username
  }
}
`;

export const SET_USER_PROFILE_PICTURE = gql`
mutation SetProfilePicture($profileId: String!, $profilePicture: String!) {
  setProfilePicture(profileId: $profileId, profilePicture: $profilePicture) {
    _id
    username
    profilePicture
    media {
      _id
      url
    }
  }
}
`;

export const ADD_LIKE = gql`
mutation addLike($profileId: ID!, $petId: ID!) {
  addLike(profileId: $profileId, petId: $petId) {
    _id
    username
  }
}
`;

export const REMOVE_LIKE = gql`
mutation removeLike($profileId: ID!, $petId: ID!) {
  removeLike(profileId: $profileId, petId: $petId) {
    _id
    username
  }
}
`;