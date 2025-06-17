import Text from './Text';
import { StyleSheet, Pressable, TextInput, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useFormik } from 'formik';
import theme from '../theme';

import useSignIn from '../hooks/useSignIn';

import * as yup from 'yup';


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
  errorInput: {
    borderColor: "#d73a4a",
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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
})


const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      if (data.authenticate.accessToken) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
        style={[
          styles.input,
          styles.child,
          formik.touched.username && formik.errors.username && styles.errorInput
        ]}    
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: '#d73a4a', marginHorizontal: 10 }}>{formik.errors.username}</Text>
      )}

      <TextInput
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        style={[
          styles.input,
          styles.child,
          formik.touched.password && formik.errors.password && styles.errorInput
        ]}      
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: '#d73a4a', marginHorizontal: 10 }}>{formik.errors.password}</Text>
      )}

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