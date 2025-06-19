import Text from './Text';
import { StyleSheet, Pressable, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigate } from 'react-router-native';
import { useFormik } from 'formik';
import theme from '../theme';

import useSignUp from '../hooks/useSignUp';
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
    margin: 4,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
  },
  errorInput: {
    borderColor: "#d73a4a",
  },
  errorText: {
    color: "#d73a4a",
    marginHorizontal: 12,
  },
  button: {
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
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
  passwordConfirm: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(5, 'Username is too short - should be 5 chars minimum.')
    .max(30, 'Username is too long - should be 30 chars maximum.'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password is too short - should be 5 chars minimum.')
    .max(50, 'Password is too long - should be 50 chars maximum.'),
  passwordConfirm: yup
    .string()
    .required('Password confirmation is required')
    .equals([yup.ref('password')], 'Passwords do not match'),
})

export const SignUpForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
      testID='usernameInput'
        label="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
        mode='outlined'
        style={[
          styles.child,
          formik.touched.username && formik.errors.username && styles.errorInput
        ]}       
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={[ styles.errorText ]}>{formik.errors.username}</Text>
      )}

      <TextInput
        testID='passwordInput'
        label="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        mode='outlined'
        style={[
          styles.child,
          formik.touched.password && formik.errors.password && styles.errorInput
        ]}      
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={[ styles.errorText ]}>{formik.errors.password}</Text>
      )}

      <TextInput
        testID='passwordConfirmInput'
        label="Password confirmation"
        value={formik.values.passwordConfirm}
        onChangeText={formik.handleChange('passwordConfirm')}
        onBlur={formik.handleBlur('passwordConfirm')}
        mode='outlined'
        style={[
          styles.child,
          formik.touched.passwordConfirm && formik.errors.passwordConfirm && styles.errorInput
        ]}     
        secureTextEntry
      />
      {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
        <Text style={[ styles.errorText ]}>{formik.errors.passwordConfirm}</Text>
      )}

      <Pressable
        testID='submitButton' 
        onPress={formik.handleSubmit}
        style={{ ...styles.button, ...styles.child}}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
    </View>
  );
}


const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data: { createUser } } = await signUp({ username, password });
      const { data: { authenticate } } = await signIn({ username, password });
      if (authenticate.accessToken) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpForm onSubmit={onSubmit} />
  );
};

export default SignUp;