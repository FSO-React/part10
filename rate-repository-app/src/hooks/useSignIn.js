import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(SIGN_IN);
  
  const signIn = async ({ username, password }) => {
    const result = await mutate({ 
      variables: { 
        credentials: { username, password }
      }
    });

    if (result.data.authenticate.accessToken) {
      await authStorage.setAccessToken(result.data.authenticate.accessToken);
      apolloClient.resetStore();
    }
    return result;
  };

  return [signIn, result];
};

export default useSignIn;