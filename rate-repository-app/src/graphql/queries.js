import { gql } from '@apollo/client';
import { REPOSITORY_CONNECTION_FRAGMENT } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      ...RepositoryConnectionFragment
    }
  }
  ${REPOSITORY_CONNECTION_FRAGMENT}
`;

