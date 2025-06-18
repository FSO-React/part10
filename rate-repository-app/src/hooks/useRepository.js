import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import { errorCodes } from '@apollo/client/invariantErrorCodes';

const useRepository = (id) => {
  let variables = { id: id };
  const { data, loading, error, ...result} = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  return {
    repository: data ? data.repository : undefined,
    loading,
    error,
    ...result,
  };
};

export default useRepository;