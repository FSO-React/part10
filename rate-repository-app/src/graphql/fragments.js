import { gql } from '@apollo/client';

export const REPOSITORY_CONNECTION_FRAGMENT = gql`
  fragment RepositoryConnectionFragment on RepositoryConnection {
    totalCount
    edges {
      cursor
      node {
        id
        ownerName
        name
        createdAt
        fullName
        ratingAverage
        reviewCount
        stargazersCount
        watchersCount
        forksCount
        openIssuesCount
        url
        ownerAvatarUrl
        description
        language
        userHasReviewed
      }
    }
  }
`;

export const AUTHENTICATE_FRAGMENT = gql`
  fragment SignInFragment on AuthenticatePayload {
    accessToken
    expiresAt
    user {
      id
      createdAt
      reviewCount
      username
    }
  }
`;