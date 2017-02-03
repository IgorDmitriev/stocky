import { RECEIVE_HISTORY } from '../actions/historyActions';

const historyReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_HISTORY:
      return action.history;
    default:
      return state;
  }
};

export default historyReducer;
