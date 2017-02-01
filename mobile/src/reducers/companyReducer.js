import {
  RECEIVE_ALL_COMPANIES
} from '../actions/companyActions';
import deepFreeze from 'deep-freeze';

const companyReducer = (state = {}, action) => {
  deepFreeze(state);
  switch (action.type) {
    case RECEIVE_ALL_COMPANIES:
      return (
        {
          action.companies
        }
      );

    default:
      return state;
  }
};

export default companyReducer;
