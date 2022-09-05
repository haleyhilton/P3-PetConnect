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

export const QUERY_DOG_BREED = gql`
query Breed($breed: String!) {
  breed(breed: $breed) {
    breed
    name
    age
    sex
    size
    color
    description
    for_sale
  }
}
`;
