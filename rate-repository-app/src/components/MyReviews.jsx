import { View, Pressable, StyleSheet, FlatList } from 'react-native';
import { useNavigate, useParams } from 'react-router-native';
import * as Linking from 'expo-linking';
import Text from './Text';
import theme from '../theme';

import useUser from '../hooks/useUser';
import MyReviewItem from './MyReviewItem';

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
  tinyLogo: {
    width: 50,
    height: 50,
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "space-around",
  },
  languageLogo: {
    height: 30,
    backgroundColor: theme.colors.primary,
    color: theme.colors.textTertiary,
    flexShrink: 1,
    padding: 5,
    borderRadius: 10
  },
  child: {
    flexGrow: 1,
    margin: 8,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textTertiary,
  },
  buttonText: {
    color: theme.colors.textTertiary,
    fontWeight: "bold",
  }
})


const MyReviews = () => {
  const navigate = useNavigate();
  const { loggedUser, loading, error } = useUser({ includeReviews: true });

  if (loading) {
    return (
      <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
        <Text>Loading...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
        <Text>Error: {error.message}</Text>
        <Pressable style={styles.button} onPress={() => navigate("/")}>
          <Text style={styles.buttonText}>Go back</Text>
        </Pressable>
      </View>
    )
  }

  console.log('loggedUser', loggedUser);
  const reviewNodes = loggedUser.reviews.edges.map(edge => edge.node);

  if (reviewNodes.length === 0) {
    return (
      <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
        <Text>You have no reviews</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <MyReviewItem review={item} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default MyReviews;