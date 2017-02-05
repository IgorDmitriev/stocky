import { fetchHistory } from '../util/serverApi';

export const RECEIVE_HISTORY = 'RECEIVE_HISTORY';

export const receiveHistory = history => ({
  type: RECEIVE_HISTORY,
  history
});

export const requestHistory = () => dispatch => {
  return fetchHistory()
    .then(resp => resp.json())
    .then(json => dispatch(receiveHistory(json)));
};
