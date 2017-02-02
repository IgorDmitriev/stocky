import deepFreeze from 'deep-freeze';

import {
  RECEIVE_COMPANIES,
  SET_FILTER
} from '../actions/searchActions';

const _nullCompanies = {
  list: {},
  filter: {
    searchText: ''
  }
}

const searchReducer = (state = _nullCompanies, action) => {
  deepFreeze(state);
  switch (action.type) {
    case RECEIVE_COMPANIES:
      return (
        {
          ...state,
          list: action.companies
        }
      );
    case SET_FILTER:
      return (
        {
          ...state,
          filter: { ...action.filter }
        }
      );
    default:
      return state;
  }
};

export default searchReducer;
