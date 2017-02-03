import * as companyAPI from '../util/serverApi.js';

export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';

export const receiveCompanies = companies => ({
  type: RECEIVE_COMPANIES,
  companies
});

export const receiveCompany = company => ({
  type: RECEIVE_COMPANY,
  company
});

export const fetchCompanies = () => dispatch => {
  return companyAPI.fetchCompanies().then(
    (resp) => {
      const companies = JSON.parse(resp._bodyText);
      dispatch(receiveCompanies(companies));
    }
  );
};

export const fetchCompany = (id) => dispatch => {
  return companyAPI.fetchCompany(id).then(
    (resp) => {
      const company = JSON.parse(resp._bodyText);
      return dispatch(receiveCompany(company));
    }
  );
};
