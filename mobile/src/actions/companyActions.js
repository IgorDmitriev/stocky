import * as companyAPI from '../util/serverApi.js';

export const RECEIVE_ALL_COMPANIES = 'RECEIVE_ALL_COMPANIES';
export const RECEIVE_COMPANY = 'RECEIVE_ALL_COMPANIES';

export const receiveAllCompanies = companies => ({
  type: RECEIVE_ALL_COMPANIES,
  companies
});

export const receiveCompany = company => ({
  type: RECEIVE_COMPANY,
  company
});

export const fetchAllCompanies = () => dispatch => {
  return companyAPI.fetchAllCompanies().then(
    (resp) => {
      dispatch(receiveAllCompanies(resp));
    }
  );
};

export const fetchCompany = (id) => dispatch => {
  return companyAPI.fetchCompany().then(
    (resp) => {
      dispatch(receiveCompany(resp))
    }
  );
};
