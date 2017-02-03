import { combineReducers } from 'redux';
import currentUser from './userReducer';
import stocks from './stockReducer';
import companies from './searchReducer';
import history from  './historyReducer';

export default combineReducers({
  currentUser,
  stocks,
  companies,
  history
});
