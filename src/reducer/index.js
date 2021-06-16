import {combineReducers} from 'redux';
import auth from './auth';
import post from './post';
import message from './message';
import getmessages from './getmessages';

export default combineReducers({
  auth,
  post,
  message,
  getmessages,
});
