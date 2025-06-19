import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';


const useRepository = (id) => {
  let variables = { id: id, first: 3 };
  const { data, loading, error, fetchMore, ...result} = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  const handleFetchMore = () => {
    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repository: data ? data.repository : undefined,
    loading,
    error,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepository;