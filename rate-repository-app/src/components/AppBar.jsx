import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'react-router-native';

import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

import useUser from '../hooks/useUser';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: theme.colors.backgroundPrimary,
    alignItems: "center"
  },
  tab: {
    flexGrow: 0,
    marginHorizontal: 4,
    marginTop: 4,
    padding: 8,
    borderColor: theme.colors.textTertiary,
    borderWidth: 1,
    borderRadius: 10,
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
  const { loggedUser, loading } = useUser();
  
  if (loading) {
    return null;
  }
  
  const loggedIn = loggedUser && loggedUser;

  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <AppBarTab text="Repositories" url="/" show="true"/>
        <AppBarTab text="Sign In" url="/signin" show={!loggedIn}/>
        <AppBarTab text="Sign Up" url="/signup" show={!loggedIn}/>
        <AppBarTab text="Create review" url="/createreview" show={loggedIn}/>
        <AppBarTab text="My reviews" url="/myreviews" show={loggedIn}/>
        <AppBarTab text="Sign Out" url="/signout" show={loggedIn}/>
      </ScrollView>
    </View>
  );
};

export default AppBar;