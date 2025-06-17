import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);
  
  const signIn = async ({ username, password }) => {
    const result = await mutate({ 
      variables: { 
        credentials: { username, password }
      }
    });    
    return result;
  };

  return [signIn, result];
};

export default useSignIn;