import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Text from './Text';
import { useDebounce } from 'use-debounce';

import RepositoryItem from './RepositoryItem';
import SortMenu from './SortMenu';
import SearchBar from './SearchBar';
import useRepositories from '../hooks/useRepositories';


const styles = StyleSheet.create({
  separator: {
    height: 0,
  },
  sortingContainer: {
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const sortingOptions = [
  { value: 'latest', label: 'Latest' },
  { value: 'highest', label: 'Highest rated' },
  { value: 'lowest', label: 'Lowest rated' },
];

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { wordSearch, setWordSearch, setSorting } = this.props;

    return (
      <View style={styles.sortingContainer}>
        <SearchBar wordSearch={wordSearch} setWordSearch={setWordSearch} />
        <SortMenu options={sortingOptions} onSelect={setSorting} />
      </View>
    );
  };

  render(){
    const { repositories } = this.props;
  
    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  
    return (
      <View>
        <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({item, index, separators}) => (
            <RepositoryItem item={item} index={index} separators={separators} />
          )}
          ListHeaderComponent={this.renderHeader}
        />
    </View>
    );
  }
}


const RepositoryList = () => {
  const [sorting, setSorting] = useState('lowest');
  const [wordSearch, setWordSearch] = useState('');
  const [wordSearchDebounced] = useDebounce(wordSearch, 500);
  const { repositories, loading, error } = useRepositories(sorting, wordSearchDebounced);

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
      </View>
    )
  }

  return <RepositoryListContainer repositories={repositories} sorting={sorting} setSorting={setSorting} wordSearch={wordSearch} setWordSearch={setWordSearch} />;
};

export default RepositoryList;