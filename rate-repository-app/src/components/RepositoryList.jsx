import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

import useRepositories from '../hooks/useRepositories';


const styles = StyleSheet.create({
  separator: {
    height: 0,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item, index, separators}) => (
        <RepositoryItem item={item} index={index} separators={separators} />
      )}
    />
  );
};

export default RepositoryList;