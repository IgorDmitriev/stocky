import { RECEIVE_USERS_STOCKS } from '../actions/stockActions';

const stockReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_USERS_STOCKS:
      return action.stocks;
    default:
      return state;
  }
};

export default stockReducer;
