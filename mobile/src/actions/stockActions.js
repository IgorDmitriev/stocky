import { fetchUsersStocks } from '../util/serverApi';

export const RECEIVE_USERS_STOCKS = 'RECEIVE_USERS_STOCKS';

export const receiveUsersStocks = stocks => ({
  type: RECEIVE_USERS_STOCKS,
  stocks
});

export const requestUsersStocks = () => dispatch => {
  return fetchUsersStocks().then(
    (resp) => {
      dispatch(receiveUsersStocks(resp));
    }
  );
};
