import * as serverAPI from '../util/serverApi.js';
import { AccessToken } from 'react-native-fbsdk';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const requestLogin = (data) => dispatch => {
  return serverAPI.login(data).then(
    (resp) => {
      const currentUser = JSON.parse(resp._bodyText);
      dispatch(receiveCurrentUser(currentUser));
    }
  );
};
