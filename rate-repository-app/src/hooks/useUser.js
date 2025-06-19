import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const useUser = ({ includeReviews = false } = {}) => {
  let variables = {};

  includeReviews ? variables.includeReviews = true : variables.includeReviews = false

  const { data, loading, error, ...result} = useQuery(GET_ME, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  return {
    loggedUser: data ? data.me : undefined,
    loading,
    error,
    ...result,
  };
};

export default useUser;