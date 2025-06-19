import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sorting, wordSearch) => {
  let variables = {};

  switch (sorting) {
    case 'highest':
      variables = { orderBy:"RATING_AVERAGE", orderDirection: "DESC", searchKeyword: wordSearch, first: 8 }; break;
    case 'lowest':
      variables = { orderBy:"RATING_AVERAGE", orderDirection: "ASC", searchKeyword: wordSearch, first: 8 }; break;
    default:
      variables = { orderBy:"CREATED_AT", orderDirection: "DESC", searchKeyword: wordSearch, first: 8 };
  }

  const { data, loading, error, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables
  })

   const handleFetchMore = () => {
    const canFetchMore = !loading && data && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return { 
    repositories: data ? data.repositories : null, 
    loading: loading, 
    fetchMore: handleFetchMore,
    error: error,
    ...result
  };
};

export default useRepositories;