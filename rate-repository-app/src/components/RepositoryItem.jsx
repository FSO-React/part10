import { View, TouchableHighlight } from 'react-native';
import Text from './Text';

const RepositoryItem = (props) => {
  const {item, index, separators} = props;
  
  return (
    <TouchableHighlight
      key={item.id}
      onPress={() => null}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={{backgroundColor: 'white'}}>
        <Text fontWeight="bold" fontSize="subheading" color="primary">Full name: {item.fullName}</Text>
        <Text color="textSecoundary">Description: {item.description}</Text>
        <Text color="textSecoundary">Language: {item.language}</Text>
        <Text color="textSecoundary">Stars: {item.stargazersCount}</Text>
        <Text color="textSecoundary">Forks: {item.forksCount}</Text>
        <Text color="textSecoundary">Reviews: {item.reviewCount}</Text>
        <Text color="textSecoundary">Rating: {item.ratingAverage}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default RepositoryItem;