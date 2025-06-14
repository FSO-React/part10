import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: theme.colors.background,
    // justifyContent: "center",
    alignItems: "center"
  },
  tab: {
    flexGrow: 0,
    paddingLeft: 15,
    color: theme.colors.textTertiary,
  }
});

const AppBarTab = ({ text, show }) => {
    if (!show) {
        return null;
    }
    return(
      <Pressable
        onPress={() => {}}
      >
        <Text fontWeight="bold" color="white" fontSize="subheading" style={styles.tab}>
          {text}
        </Text>
      </Pressable>
);};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <AppBarTab text="Repositories" show="true"/>
      </ScrollView>
    </View>
  );
};

export default AppBar;