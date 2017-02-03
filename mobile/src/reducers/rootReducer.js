import { combineReducers } from 'redux';
import currentUser from './userReducer';
import stocks from './stockReducer';
import companies from './searchReducer';
import history from  './historyReducer';
import company from './companyReducer';
import transaction from './transactionReducer';

export default combineReducers({
  currentUser,
  stocks,
  companies,
  history,
  company,
  transaction
});
