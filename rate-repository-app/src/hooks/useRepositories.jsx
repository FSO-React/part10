import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, loading, error, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network"
  })

  return { 
    repositories: data ? data.repositories : null, 
    loading: loading, 
    error: error,
    ...result
  };
};

export default useRepositories;