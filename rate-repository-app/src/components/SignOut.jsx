import Text from './Text';
import { StyleSheet, Pressable, TextInput, View } from 'react-native';
import theme from '../theme';
import { useNavigate } from 'react-router-native';

import AuthStorageContext from '../contexts/AuthStorageContext';
import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    marginBottom: 10, 
    marginHorizontal: 12, 
    padding: 5,
    justifyContent: "auto",
  },
  child: {
    flexGrow: 1,
    margin: 8,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.textTertiary,
  },
  buttonText: {
    color: theme.colors.textTertiary,
    fontWeight: "bold",
  }
});


const SignOut = () => {
  const navigate = useNavigate();
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const logout = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate("/");
  };

  return (
    <View style={styles.container}>
      <Pressable 
        onPress={logout}
        style={{ ...styles.button, ...styles.child}}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </Pressable>
    </View>
  );
};

export default SignOut;