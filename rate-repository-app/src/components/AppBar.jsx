import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'react-router-native';

import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <AppBarTab text="Repositories" url="/" show="true"/>
        <AppBarTab text="Sign In" url="/signin" show="true"/>
      </ScrollView>
    </View>
  );
};

export default AppBar;