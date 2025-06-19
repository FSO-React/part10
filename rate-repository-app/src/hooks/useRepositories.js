import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sorting, wordSearch) => {
  let variables = {};

  switch (sorting) {
    case 'highest':
      variables = { orderBy:"RATING_AVERAGE", orderDirection: "DESC", searchKeyword: wordSearch }; break;
    case 'lowest':
      variables = { orderBy:"RATING_AVERAGE", orderDirection: "ASC", searchKeyword: wordSearch }; break;
    default:
      variables = { orderBy:"CREATED_AT", orderDirection: "DESC", searchKeyword: wordSearch };
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