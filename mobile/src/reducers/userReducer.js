import { AsyncStorage } from 'react-native';
import deepFreeze from 'deep-freeze';

import {
  RECEIVE_CURRENT_USER
} from '../actions/userActions';

const _nullUser = {
  userID: null,
  fullName: null
};

const userReducer = (state = _nullUser, action) => {
  deepFreeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { userID, fullName, sessionToken } = action.currentUser;

      AsyncStorage.setItem('sessionToken', sessionToken);
      return (
        {
          userID,
          fullName
        }
      );

    default:
      return state;
  }
};

export default userReducer;
