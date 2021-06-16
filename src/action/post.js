import database from '@react-native-firebase/database';
import {SET_POST, ERROR_POST} from './action.types';
import auth from '@react-native-firebase/auth';
import {Children} from 'react';
export const getPosts = () => async dispatch => {
  try {
    database()
      .ref('users')
      .on('value', datasnapshot => {
        const uuid = auth().currentUser.uid;
        let users = [];
        datasnapshot.forEach(child => {
          if (child.val().uid === uuid) {
          } else {
            users.push({
              username: child.val().name,
              uuid: child.val().uid,
              email: child.val().email,
            });
            dispatch({
              type: SET_POST,
              payload: Object.values(users),
            });
          }
        });
      });
  } catch (error) {
    dispatch({
      type: ERROR_POST,
    });
  }
};
