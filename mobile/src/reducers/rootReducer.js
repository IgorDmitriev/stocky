import { combineReducers } from 'redux';
import currentUser from './userReducer';
import companies from './searchReducer';

export default combineReducers({
  currentUser,
  companies
});
