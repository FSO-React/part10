import { Searchbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 2,
    margin: 8
  },
  searchbar: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  }
});

const SearchBar = ({ wordSearch, setWordSearch }) => {
  return (
    <View style={styles.container}>
      <Searchbar
        mode='bar'
        placeholder="Search..."
        onChangeText={setWordSearch}
        value={wordSearch}
        style={styles.searchbar}
      />
    </View>
  );
};

export default SearchBar;