import * as serverAPI from '../util/serverApi.js';
import { AccessToken } from 'react-native-fbsdk';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const requestLogin = (error, result) => dispatch => {
  return serverAPI.login(data).then(

  )
};
