import {
  RECEIVE_CURRENT_USER
} from '../actions/userActions';
import deepFreeze from 'deep-freeze';

const _nullUser = {
  userID: null,
  fullName: null
};

const userReducer = (state = _nullUser, action) => {
  deepFreeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return (
        {
          ...action.currentUser
        }
      );

    default:
      return state;
  }
};

export default userReducer;
