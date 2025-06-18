import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'react-router-native';

import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: theme.colors.backgroundPrimary,
    // justifyContent: "center",
    alignItems: "center"
  },
  tab: {
    flexGrow: 0,
    paddingLeft: 15,
    color: theme.colors.textTertiary,
  }
});

const AppBarTab = ({ text, url, show }) => {
    if (!show) {
        return null;
    }
    return(
      <Pressable
        onPress={() => {}}
      >
        <Link to={url}>
          <Text fontWeight="bold" color="white" fontSize="subheading" style={styles.tab}>
            {text}
          </Text>
        </Link>
      </Pressable>
);};

const AppBar = () => {
  const { data, loading } = useQuery(GET_ME);
  
  if (loading) {
    return null;
  }
  
  const loggedIn = data && data.me;

  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <AppBarTab text="Repositories" url="/" show="true"/>
        <AppBarTab text="Sign In" url="/signin" show={!loggedIn}/>
        <AppBarTab text="Create review" url="/createreview" show={loggedIn}/>
        <AppBarTab text="Sign Out" url="/signout" show={loggedIn}/>
      </ScrollView>
    </View>
  );
};

export default AppBar;