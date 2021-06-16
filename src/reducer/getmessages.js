import {GET_MESSAGES, ERROR_MESSAGES} from '../action/action.types';

const initialState = {
  messages: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case ERROR_MESSAGES:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
