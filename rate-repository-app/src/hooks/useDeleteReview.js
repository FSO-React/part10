import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';


const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);
  const apolloClient = useApolloClient();
  
  const deleteReview = async ({ reviewId }) => {
    const result = await mutate({ 
      variables: { 
        deleteReviewId: reviewId
      }
    });

    apolloClient.resetStore();
    return result;
  };

  return [deleteReview, result];
};

export default useDeleteReview;