import { combineReducers } from 'redux';
import currentUser from './userReducer';
import stocks from './stockReducer';
import companies from './searchReducer';

export default combineReducers({
  currentUser,
  stocks,
  companies
});
