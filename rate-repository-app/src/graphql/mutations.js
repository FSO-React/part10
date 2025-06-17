import { gql } from '@apollo/client';
import { AUTHENTICATE_FRAGMENT } from './fragments';

export const SIGN_IN = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      ...SignInFragment
    }
  }
  ${AUTHENTICATE_FRAGMENT}
`;