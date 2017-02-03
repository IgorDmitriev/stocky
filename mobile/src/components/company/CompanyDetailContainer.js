import { connect } from 'react-redux';
import CompanyDetail from './CompanyDetail';
import { fetchCompany } from '../../actions/companyActions';


const mapStateToProps = state => ({
  company: state.company
});

const mapDispatchToProps = (dispatch) => ({
  fetchCompany: (id) => dispatch(fetchCompany(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyDetail);
