import { connect } from 'react-redux';
import CompanyList from './CompanyList';


const mapStateToProps = state => ({
  currentUser: state.currentUser,
  companies: state.companies
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllCompanies: () => dispatch(fetchAllCompanies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyList);
