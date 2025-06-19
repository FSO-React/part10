import { View, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigate, useParams } from 'react-router-native';
import * as Linking from 'expo-linking';
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

export const formatStatNumber = (num) => {
    if (num >= 1000) {
        return (`${Math.round(num / 1000 * 10) / 10}k`);
    }else{
        return num;
    }
};

const StatItem = ({ text, testID, number }) => (
    <View style={styles.statItem}>
        <Text testID={testID} fontWeight="bold">{formatStatNumber(number)}</Text> 
        <Text>{text}</Text>
    </View>
);

const RepositoryInfo = ({ repository }) => {
  return (
    <View testID="repositoryView" style={styles.containerItem}>
      <View style={styles.containerDetails}>
        <View style={{ flexGrow: 0, padding: 8, width: '20%' }}>
          <Image
            style={styles.tinyLogo}
            source={{uri: repository.ownerAvatarUrl}}
          />
        </View>
        <View style={{ flexGrow: 1, padding: 8, width: '80%' }}> 
          <Text testID="fullName" fontWeight="bold" fontSize="subheading" color="primary">{repository.fullName}</Text>
          <Text testID="description" color="textSecoundary" >{repository.description}</Text>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
            <Text testID="language" fontWeight="bold" style={styles.languageLogo}>{repository.language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerStats}>
        <StatItem testID="stargazersCount" text="Stars" number={repository.stargazersCount}/>
        <StatItem testID="forksCount" text="Forks" number={repository.forksCount}/>
        <StatItem testID="reviewCount" text="Reviews" number={repository.reviewCount}/>
        <StatItem testID="ratingAverage" text="Rating" number={repository.ratingAverage}/>
      </View>

      <Pressable
        testID='openInGithubButton' 
        onPress={() => Linking.openURL(repository.url)}
        style={{ ...styles.button, ...styles.child}}
      >
        <Text style={styles.buttonText}>Open in GitHub</Text>
      </Pressable>
    </View>
  );
};

export default RepositoryInfo;