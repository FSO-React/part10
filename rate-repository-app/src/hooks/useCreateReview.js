import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';


const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const apolloClient = useApolloClient();
  
  const createReview = async ({ repositoryOwner, repositoryName, rating, text }) => {
    const newReview = {
      ownerName: repositoryOwner,
      rating: Number(rating),
      repositoryName: repositoryName,
      text: text
    }
    
    const result = await mutate({ 
      variables: { 
        review: newReview
      }
    });

    apolloClient.resetStore();
    return result;
  };

  return [createReview, result];
};

export default useCreateReview;