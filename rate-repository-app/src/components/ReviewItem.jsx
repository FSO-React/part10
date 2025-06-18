import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

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
})

const formatDate = (dateStr) => {
  const date = new Date(dateStr);

  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();

  return `${day}.${month}.${year}`;
}

const ReviewItem = ({ review }) => {
  return (
    <View testID="repositoryView" style={styles.containerItem}>
      <View style={styles.containerDetails}>
        <View style={{ flexGrow: 0, padding: 8, width: '15%' }}>
          <View style={styles.ratingContainer}>
            <Text testID="rating" fontWeight="bold" fontSize="subheading" color="primary">{review.rating}</Text>
          </View>
        </View>
        <View style={{ flexGrow: 1, padding: 8, width: '85%' }}> 
          <Text testID="reviewUser" fontWeight="bold" fontSize="subheading" color="primary">{review.user.username}</Text>
          <Text testID="reviewDate" color="textSecoundary" >{formatDate(review.createdAt)}</Text>
          <Text testID="reviewDescription" color="textSecoundary" >{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;