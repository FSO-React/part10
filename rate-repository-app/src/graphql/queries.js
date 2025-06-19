import { gql } from '@apollo/client';
import { 
  REPOSITORY_CONNECTION_FRAGMENT,
  USER_FRAGMENT,
  ONE_REPOSITORY_FRAGMENT,
  REVIEW_FRAGMENT,
} from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      ...RepositoryConnectionFragment
    }
  }
  ${REPOSITORY_CONNECTION_FRAGMENT}
`;

export const GET_ME = gql`
  query Me($includeReviews: Boolean = false) {
    me {
      ...UserFragment
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewFragment
          }
        }
      }
    }
  }
  ${USER_FRAGMENT}
  ${REVIEW_FRAGMENT}
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      ...OneRepositoryFragment
    }
  }
  ${ONE_REPOSITORY_FRAGMENT}
`;