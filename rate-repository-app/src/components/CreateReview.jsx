import Text from './Text';
import { StyleSheet, Pressable, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useFormik } from 'formik';
import theme from '../theme';

import * as yup from 'yup';
import useCreateReview from '../hooks/useCreateReview';
import { useNavigate } from 'react-router-native';


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
  repositoryOwner: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  repositoryOwner: yup
    .string('The repository owner should be a string')
    .required('The repository owner is required'),
  repositoryName: yup
    .string('The repository name should be a string')
    .required('The repository name is required'),
  rating: yup
    .number('The repository rating should be a number')
    .required('The repository rating is required')
    .min(0, 'Rating should be greater than 0')
    .max(100, 'Rating should be less than 100'),
  text: yup
    .string('The review text should be a string')
})

export const CreateReviewForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        testID='repositoryOwnerInput'
        label="Repository owner"
        value={formik.values.repositoryOwner}
        onChangeText={formik.handleChange('repositoryOwner')}
        onBlur={formik.handleBlur('repositoryOwner')}
        mode='outlined'
        style={[
          styles.child,
          formik.touched.repositoryOwner && formik.errors.repositoryOwner && styles.errorInput
        ]}    
      />
      {formik.touched.repositoryOwner && formik.errors.repositoryOwner && (
        <Text style={[ styles.errorText ]}>{formik.errors.repositoryOwner}</Text>
      )}

      <TextInput
        testID='repositoryNameInput'
        label="Repository name"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
        onBlur={formik.handleBlur('repositoryName')}
        mode='outlined'
        style={[
          styles.child,
          formik.touched.repositoryName && formik.errors.repositoryName && styles.errorInput
        ]}    
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={[ styles.errorText ]}>{formik.errors.repositoryName}</Text>
      )}

      <TextInput
        testID='ratingInput'
        label="Rating"
        value={formik.values.rating}
        onChangeText={(value) => {
          const numericValue = value.replace(/[^0-9]/g, '');
          formik.setFieldValue('rating', numericValue);
        }}
        onBlur={formik.handleBlur('rating')}
        keyboardType="numeric"
        mode='outlined'
        style={[
          styles.child,
          formik.touched.rating && formik.errors.rating && styles.errorInput
        ]}    
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={[ styles.errorText ]}>{formik.errors.rating}</Text>
      )}

      <TextInput
        testID='reviewInput'
        label="Review"
        value={formik.values.text}
        onChangeText={formik.handleChange('text')}
        onBlur={formik.handleBlur('text')}
        mode='outlined'
        multiline
        style={[
          styles.child,
          formik.touched.text && formik.errors.text && styles.errorInput
        ]}    
      />
      {formik.touched.text && formik.errors.text && (
        <Text style={[ styles.errorText ]}>{formik.errors.text}</Text>
      )}

      <Pressable
        testID='submitButton' 
        onPress={formik.handleSubmit}
        style={{ ...styles.button, ...styles.child}}
      >
        <Text style={styles.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  );
}


const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();
  
  const onSubmit = async (values) => {
    const { repositoryOwner, repositoryName, rating, text } = values;
    try {
      const { data } = await createReview({ repositoryOwner, repositoryName, rating, text });
      navigate(`/repositories/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CreateReviewForm onSubmit={onSubmit} />
  );
};

export default CreateReview;