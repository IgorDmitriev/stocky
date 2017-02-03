import {
  RECEIVE_COMPANIES,
  RECEIVE_COMPANY
} from '../actions/companyActions';
import deepFreeze from 'deep-freeze';

const _nullCompany = {
  name: null,
  price: null,
  symbol: null,
  price_percent_change: null,
  history:[[0,0]]
};

const companyReducer = (state = _nullCompany, action) => {
  deepFreeze(state);
  switch (action.type) {
    case RECEIVE_COMPANY:
      return action.company;
    default:
      return state;
  }
};

export default companyReducer;
