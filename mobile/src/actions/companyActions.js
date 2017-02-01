// import * as companyAPI from '../util/companyApi.js';
//need to make company util

export const RECEIVE_ALL_COMPANIES = 'RECEIVE_ALL_COMPANIES';

export const receiveAllCompanies = companies => ({
  type: RECEIVE_ALL_COMPANIES,
  companies
});

export const fetchAllCompanies = () => dispatch => {
  return companyAPI.fetchAllCompanies().then(
    (resp) => {
      dispatch(receiveAllCompanies(resp));
    }
  );
};
