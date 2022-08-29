import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query findUser {
    user {
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
      pet {
        _id
        name
        breed
        age
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
    }
  }
  
`;
