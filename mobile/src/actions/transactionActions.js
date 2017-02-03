import * as serverAPI from '../util/serverApi.js';

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';

export const receiveTransaction = transaction => ({
  type: RECEIVE_TRANSACTION,
  transaction
});

export const createTransaction = transaction => dispatch => (
  serverAPI.createTransaction().then(resp => {
    const transaction = JSON.parse(resp._bodyText);
    dispatch(receiveTransaction(transaction));
  })
);
