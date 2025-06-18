import { gql } from '@apollo/client';
import { 
  AUTHENTICATE_FRAGMENT,
  REVIEW_FRAGMENT
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