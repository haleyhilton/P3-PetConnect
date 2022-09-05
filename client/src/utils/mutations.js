import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation AddUser($username: String!, $password: String!, $email: String!, $firstName: String!, $lastName: String!, $dateOfBirth: String!, $zipCode: Int!) {
  addUser(username: $username, password: $password, email: $email, first_name: $firstName, last_name: $lastName, date_of_birth: $dateOfBirth, zip_code: $zipCode) {
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

export const CREATE_USER_PHOTO = gql`
mutation AddUserPhoto($username: String!, $media: String!) {
    addProfilePicture(username: $username, media: $media) {
      media {
        url
      }
    }
  }
`;
