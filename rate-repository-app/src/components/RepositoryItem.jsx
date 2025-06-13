import { View, Text, TouchableHighlight } from 'react-native';


const RepositoryItem = (props) => {
  const {item, index, separators} = props;
  
  return (
    <TouchableHighlight
      key={item.id}
      onPress={() => null}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={{backgroundColor: 'white'}}>
        <Text>Full name: {item.fullName}</Text>
        <Text>Description: {item.description}</Text>
        <Text>Language: {item.language}</Text>
        <Text>Stars: {item.stargazersCount}</Text>
        <Text>Forks: {item.forksCount}</Text>
        <Text>Reviews: {item.reviewCount}</Text>
        <Text>Rating: {item.ratingAverage}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default RepositoryItem;