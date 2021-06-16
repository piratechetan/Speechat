import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import database from '@react-native-firebase/database';

export const signup = data => async dispatch => {
  const {name, email, password} = data;

  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(data => {
      console.log('User creation was success');

      database()
        .ref('/users/' + data.user.uid)
        .set({
          name,
          email,
          uid: data.user.uid,
        })
        .then(() => console.log('Data store successfully'));
      Snackbar.show({
        text: 'account created',
        textColor: 'white',
        backgroundColor: 'blue',
      });
    })
    .catch(error => {
      Snackbar.show({
        text: 'Signup failed',
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};

export const signin = data => async dispatch => {
  const {email, password} = data;

  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Signin successfully');
      Snackbar.show({
        text: 'account sign-in',
        textColor: 'white',
        backgroundColor: 'blue',
      });
    })
    .catch(error => {
      Snackbar.show({
        text: 'Signin failed',
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};

export const signout = () => async dispatch => {
  auth()
    .signOut()
    .then(() => {
      console.log('signout successfully');
      Snackbar.show({
        text: 'user signout',
        textColor: 'white',
        backgroundColor: 'blue',
      });
    })
    .catch(error => {
      console.log(error);
      Snackbar.show({
        text: 'User signout failed',
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};
