import { combineReducers } from 'redux';
import currentUser from './userReducer';
import stocks from './stockReducer';
import companies from './searchReducer';
import company from './companyReducer';

export default combineReducers({
  currentUser,
  stocks,
  companies,
  company
});
