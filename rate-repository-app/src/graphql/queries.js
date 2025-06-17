import { gql } from '@apollo/client';
import { 
  REPOSITORY_CONNECTION_FRAGMENT,
  USER_FRAGMENT 
} from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      ...RepositoryConnectionFragment
    }
  }
  ${REPOSITORY_CONNECTION_FRAGMENT}
`;

export const GET_ME = gql`
  query Me {
    me {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

