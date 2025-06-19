import { gql } from '@apollo/client';
import { 
  AUTHENTICATE_FRAGMENT,
  REVIEW_FRAGMENT,
  USER_FRAGMENT,
} from './fragments';

export const SIGN_IN = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      ...SignInFragment
    }
  }
  ${AUTHENTICATE_FRAGMENT}
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      ...ReviewFragment
    }
  }
  ${REVIEW_FRAGMENT}
`;

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      ...UserFragment    
    }
  }
  ${USER_FRAGMENT}
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`;