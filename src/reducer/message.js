import {SEND_MESSAGE, RECEIVED_MESSAGE} from '../action/action.types';

const initialState = {
  message: '',
  currentuid: ' ',
  guestuid: ' ',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        message: action.payload,
        currentuid: action.payload,
        guestuid: action.payload,
      };
    case RECEIVED_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};
