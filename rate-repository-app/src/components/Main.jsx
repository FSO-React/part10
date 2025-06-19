import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import theme from '../theme';

import RepositoryList from './RepositoryList';
import RepositoryView from './RepositoryView';
import CreateReview from './CreateReview';
import MyReviews from './MyReviews';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignOut from './SignOut';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundSecoundary,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repositories/:id" element={<RepositoryView />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createreview" element={<CreateReview />} />
        <Route path="/myreviews" element={<MyReviews />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;