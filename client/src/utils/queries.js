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

export const QUERY_PET_SEARCH = gql`
query petSearch($search: String, $age: Int, $breed: String, $sex: String, $size: String, $color: String, $for_sale: Boolean) {
  query petSearch(search: $search, age: $age, breed: $breed, sex: $sex, size: $size, color: $color, for_sale: $for_sale) {
    user {
      _id
      name
      age
      breed
      sex
      size
      color
      description
      for_sale
      media
      lastUpdated
    }
  }
}
`;
