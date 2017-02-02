import { connect } from 'react-redux';
import _ from 'lodash';
import SearchScene from './SearchScene';


import {
  requestCompanies,
  setFilter
} from '../../actions/searchActions';

const mapStateToProps = state => {
  const companies = _.values(state.companies.list);
  const filter = state.companies.filter;

  const filtered = companies.filter(
    (company) => company.name.includes(filter.searchText)
  );

  return {
    companies: filtered
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestCompanies: searchText => dispatch(requestCompanies(searchText)),
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScene);
