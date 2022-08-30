import { gql } from '@apollo/client';

export const CREATE_USER_PHOTO = gql`
mutation AddUserPhoto($username: String!, $media: String!) {
    addProfilePicture(username: $username, media: $media) {
      media {
        url
      }
    }
  }
`;
