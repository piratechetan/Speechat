import database from '@react-native-firebase/database';
import {GET_MESSAGES, ERROR_MESSAGES} from './action.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

export const getmessage = guestuid => async dispatch => {
  const currentuid = auth().currentUser.uid;

  try {
    database()
      .ref('messages')
      .child(currentuid)
      .child(guestuid)
      .on('value', datasnapshot => {
        let messages = [];
        datasnapshot.forEach(data => {
          messages.push({
            sendby: data.val().sender,
            receivedby: data.val().receiver,
            message: data.val().message,
          });
          dispatch({
            type: GET_MESSAGES,
            payload: messages.reverse(),
          });
        });
      });
  } catch (error) {
    dispatch({
      type: ERROR_MESSAGES,
    });
  }
};
