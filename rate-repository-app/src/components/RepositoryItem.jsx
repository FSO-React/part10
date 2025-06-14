import { View, TouchableHighlight, StyleSheet, Image } from 'react-native';
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
  }
})

const formatStatNumber = (num) => {
    if (num >= 1000) {
        return (`${Math.round(num / 1000 * 10) / 10}k`);
    }else{
        return num;
    }
};

const StatItem = ({ text, number }) => (
    <View style={styles.statItem}>
        <Text fontWeight="bold">{formatStatNumber(number)}</Text> 
        <Text>{text}</Text>
    </View>
);

const RepositoryItem = (props) => {
  const {item, index, separators} = props;
  
  return (
    <TouchableHighlight
      key={item.id}
      onPress={() => null}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={styles.containerItem}>
        <View style={styles.containerDetails}>
          <View style={{ flexGrow: 0, padding: 8 }}>
            <Image
              style={styles.tinyLogo}
              source={{uri: item.ownerAvatarUrl}}
            />
          </View>
          <View style={{ flexGrow: 1, padding: 8 }}> 
            <Text fontWeight="bold" fontSize="subheading" color="primary">{item.fullName}</Text>
            <Text color="textSecoundary" style={{ flex: 1, flexShrink: 1, flexWrap: "wrap" }}>{item.description}</Text>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
              <Text fontWeight="bold" style={styles.languageLogo}>{item.language}</Text>
            </View>
          </View>
        </View>

        <View style={styles.containerStats}>
          <StatItem text="Stars" number={item.stargazersCount}/>
          <StatItem text="Forks" number={item.forksCount}/>
          <StatItem text="Reviews" number={item.reviewCount}/>
          <StatItem text="Rating" number={item.ratingAverage}/>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default RepositoryItem;