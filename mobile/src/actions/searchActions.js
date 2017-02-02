import * as serverAPI from '../util/serverApi.js';

export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES';
export const SET_FILTER = 'SET_FILTER';

export const receiveCompanies = companies => ({
  type: RECEIVE_COMPANIES,
  companies
});

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

export const requestCompanies = (searchText) => dispatch => {
  return serverAPI.fetchCompanies(searchText)
    .then((resp) => {
      const companies = JSON.parse(resp._bodyText);
      return dispatch(receiveCompanies(companies));
    });
};
