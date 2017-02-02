import { connect } from 'react-redux';
import CompanyList from './CompanyList';


const mapStateToProps = state => ({
  currentUser: state.currentUser,
  company: state.company
});

const mapDispatchToProps = (dispatch) => ({
  fetchCompany: (id) => dispatch(fetchCompany(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyList);
