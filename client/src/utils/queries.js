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
query OneUser($profileId: ID!) {
  oneUser(profileId: $profileId) {
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

export const QUERY_ONE_PET = gql`
query OnePet($profileId: ID!) {
  onePet(profileId: $profileId) {
    _id
    name
    age
    breed
    sex
    size
    color
    description
    for_sale
    lastUpdated
    media {
      _id
      url
    }
  }
}
`;

export const QUERY_PET_BY_NAME = gql`
query Query($name: String) {
  onePetName(name: $name) {
    _id
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

export const QUERY_PET_SEARCH = gql`
  query petSearch($search: String, $age: Int, $breed: String, $sex: String, $size: String, $color: String, $for_sale: Boolean) {
    petSearch(search: $search, age: $age, breed: $breed, sex: $sex, size: $size, color: $color, for_sale: $for_sale) {
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
    }
  }
`;


export const QUERY_ALL_PICTURES_BY_USER = gql`
query ViewUserPictures($profileId: ID!) {
  viewUserPictures(profileId: $profileId) {
    profilePicture
    media {
      url
      _id
    }
  }
}
`;

//can add more to this later if needed, only needs _id right now
export const QUERY_ONE_USER_BY_PET_ID = gql`
query oneUserByPetId($petId: ID!) {
  oneUserByPetId(petId: $petId) {
    _id
  }
}
`