import * as serverAPI from '../util/serverApi.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

const _nullUser = {
  userID: null,
  fullName: null,
  sessionToken: ''
};

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

export const requestUserInfo = () => dispatch => {
  return serverAPI.fetchUserInfo()
    .then(resp => resp.json())
    .then(json => dispatch(receiveCurrentUser(json)));
};

export const requestLogout = () => dispatch => {
  return serverAPI.logout().then(
    () => dispatch(receiveCurrentUser(_nullUser))
  );
};
