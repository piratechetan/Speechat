import database from '@react-native-firebase/database';

export const sendMessage = data => async dispatch => {
  const {currentuid, guestuid, message} = data;
  // console.log(message);
  try {
    database()
      .ref('messages/' + currentuid)
      .child(guestuid)
      .push({
        sender: currentuid,
        receiver: guestuid,
        message: message,
      });
  } catch (error) {
    console.log(error);
  }
};

export const receiveMessage = data => async dispatch => {
  const {currentuid, guestuid, message} = data;
  try {
    database()
      .ref('messages/' + guestuid)
      .child(currentuid)
      .push({
        sender: currentuid,
        receiver: guestuid,
        message: message,
      });
  } catch (error) {
    console.log(error);
  }
};
