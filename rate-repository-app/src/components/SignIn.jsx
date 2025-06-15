import Text from './Text';
import { StyleSheet, Pressable, TextInput, View } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';

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
  input: {
    borderWidth: 1,
    borderColor: "grey",
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textTertiary,
  },
  buttonText: {
    color: theme.colors.textTertiary,
    fontWeight: "bold",
  }
});

const initialValues = {
  username: '',
  password: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={{ ...styles.input, ...styles.child }}
      />
      <TextInput
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        style={{ ...styles.input, ...styles.child }}
        secureTextEntry
      />
      <Pressable 
        onPress={formik.handleSubmit}
        style={{ ...styles.button, ...styles.child}}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;