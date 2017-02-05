import { RECEIVE_HISTORY } from '../actions/historyActions';

const _nullHistory = [{date: null, money: null}];

const historyReducer = (state = _nullHistory, action) => {
  switch (action.type) {
    case RECEIVE_HISTORY:
      return action.history;
    default:
      return state;
  }
};

export default historyReducer;
