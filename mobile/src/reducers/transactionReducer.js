import {
  RECEIVE_TRANSACTION
} from '../actions/transactionActions';
import deepFreeze from 'deep-freeze';

const _nullTransaction = {
  user_id: null,
  company_id: null,
  price: null,
  stock_count: null
}

const transactionReducer = (state = _nullTransaction, action) => {
  deepFreeze(state);
  switch (action.type) {
    case RECEIVE_TRANSACTION:
      return action.transaction;
    default:
      return state;
  }
};

export default transactionReducer;
