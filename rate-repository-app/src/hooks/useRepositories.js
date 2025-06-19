import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sorting) => {
  let variables = {};

  switch (sorting) {
    case 'highest':
      variables = { orderBy:"RATING_AVERAGE", orderDirection: "DESC" }; break;
    case 'lowest':
      variables = { orderBy:"RATING_AVERAGE", orderDirection: "ASC" }; break;
    default:
      variables = { orderBy:"CREATED_AT", orderDirection: "DESC" };
  }

  const { data, loading, error, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables
  })

  return { 
    repositories: data ? data.repositories : null, 
    loading: loading, 
    error: error,
    ...result
  };
};

export default useRepositories;