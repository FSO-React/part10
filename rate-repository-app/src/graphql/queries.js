import { gql } from '@apollo/client';
import { 
  REPOSITORY_CONNECTION_FRAGMENT,
  USER_FRAGMENT,
  ONE_REPOSITORY_FRAGMENT 
} from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      ...OneRepositoryFragment
    }
  }
  ${ONE_REPOSITORY_FRAGMENT}
`;