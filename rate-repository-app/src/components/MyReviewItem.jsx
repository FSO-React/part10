import { View, StyleSheet, Pressable, Alert } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { useNavigate } from 'react-router-native';
import useDeleteReview from '../hooks/useDeleteReview';


const styles = StyleSheet.create({
  containerItem: { 
    backgroundColor: "white",
    marginBottom: 10, 
    marginHorizontal: 12, 
    padding: 5, 
  },
  containerDetails: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  containerStats: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 4,
  },
  ratingContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: 5,
    padding: 5,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 15,
    flexGrow: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: theme.colors.textTertiary
  }
})

const formatDate = (dateStr) => {
  const date = new Date(dateStr);

  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();

  return `${day}.${month}.${year}`;
}


const MyReviewItem = ({ review }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  const createDeleteConfirmation = () => 
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => deleteReview({ reviewId: review.id })
        }
      ],
      { 
        cancelable: false,
      }
    );

  return (
    <View testID="myReviewItem" style={styles.containerItem}>
      <View style={styles.containerDetails}>
        <View style={{ flexGrow: 0, padding: 8, width: '15%' }}>
          <View style={styles.ratingContainer}>
            <Text testID="rating" fontWeight="bold" fontSize="subheading" color="primary">{review.rating}</Text>
          </View>
        </View>
        <View style={{ flexGrow: 1, padding: 8, width: '85%' }}> 
          <Text testID="reviewedRep" fontWeight="bold" fontSize="subheading" color="primary">{review.repository.fullName}</Text>
          <Text testID="reviewDate" color="textSecoundary" >{formatDate(review.createdAt)}</Text>
          <Text testID="reviewDescription" color="textSecoundary" >{review.text}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={[ styles.button, { backgroundColor: theme.colors.primary, borderColor: theme.colors.primary } ]} onPress={() => navigate(`/repositories/${review.repositoryId}`)}>
          <Text testID="viewRepository" fontWeight="bold" style={styles.buttonText}>View repository</Text>
        </Pressable>
        <Pressable style={[ styles.button, { backgroundColor: theme.colors.delete, borderColor: theme.colors.delete } ]} onPress={createDeleteConfirmation}>
          <Text testID="deleteReview" fontWeight="bold" style={styles.buttonText} >Delete review</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MyReviewItem;