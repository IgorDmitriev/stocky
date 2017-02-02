import { combineReducers } from 'redux';
import currentUser from './userReducer';
import stocks from './stockReducer';

export default combineReducers({
  currentUser,
  stocks
});
