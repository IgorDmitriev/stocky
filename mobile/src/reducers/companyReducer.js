import {
  RECEIVE_ALL_COMPANIES,
  RECEIVE_COMPANY
} from '../actions/companyActions';
import deepFreeze from 'deep-freeze';

const companyReducer = (state = {}, action) => {
  deepFreeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_COMPANIES:
      return (
        {
          action.companies
        }
      );
    case RECEIVE_COMPANY:
      return (
        {
          newState[action.company.id] = action.company;
        }
      )

    default:
      return state;
  }
};

export default companyReducer;
