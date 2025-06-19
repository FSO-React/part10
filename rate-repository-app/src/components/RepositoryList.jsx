import { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Text from './Text';

import RepositoryItem from './RepositoryItem';
import SortMenu from './SortMenu';
import useRepositories from '../hooks/useRepositories';


const styles = StyleSheet.create({
  separator: {
    height: 0,
  },
  sortingContainer: {
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

export const RepositorySortingContainer = ({ setSorting }) => {
  return (
    <View style={styles.sortingContainer}>
      <SortMenu options={sortingOptions} onSelect={setSorting} />
    </View>
  );
}

export const RepositoryListContainer = ({ repositories, sorting, setSorting }) => {
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
        ListHeaderComponent={() => <RepositorySortingContainer setSorting={setSorting} />}
      />
    </View>
  );
}

const RepositoryList = () => {
  const [sorting, setSorting] = useState('lowest');
  const { repositories, loading, error } = useRepositories(sorting);

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

  return <RepositoryListContainer repositories={repositories} sorting={sorting} setSorting={setSorting} />;
};

export default RepositoryList;