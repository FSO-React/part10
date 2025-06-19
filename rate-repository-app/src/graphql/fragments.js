import { gql } from '@apollo/client';

export const REPOSITORY_FRAGMENT = gql`
  fragment RepositoryFragment on Repository {
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
`;

export const PAGE_INFO_FRAGMENT = gql`
  fragment PageInfoFragment on PageInfo {
    hasPreviousPage
    hasNextPage
    startCursor
    endCursor
  }
`;

export const REPOSITORY_CONNECTION_FRAGMENT = gql`
  fragment RepositoryConnectionFragment on RepositoryConnection {
    totalCount
    edges {
      cursor
      node {
        ...RepositoryFragment
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
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

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    createdAt
    reviewCount
    username
  }
`;

export const REVIEW_FRAGMENT = gql`
  fragment ReviewFragment on Review {
    id
    user {
      username
    }
    repository {
      fullName
    }
    userId
    repositoryId
    rating
    createdAt
    text
  }
`;

export const ONE_REPOSITORY_FRAGMENT = gql`
  fragment OneRepositoryFragment on Repository {
    ...RepositoryFragment
    reviews {
      totalCount
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        cursor
        node {
          ...ReviewFragment
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
  ${PAGE_INFO_FRAGMENT}
  ${REVIEW_FRAGMENT}
`