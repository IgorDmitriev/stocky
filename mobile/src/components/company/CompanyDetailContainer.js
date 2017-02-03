import { connect } from 'react-redux';
import CompanyDetail from './CompanyDetail';
import { fetchCompany } from '../../actions/companyActions';
import { createTransaction } from '../../actions/transactionActions';


const mapStateToProps = state => ({
  company: state.company
});

const mapDispatchToProps = (dispatch) => ({
  fetchCompany: (id) => dispatch(fetchCompany(id)),
  createTransaction: (transaction) => dispatch(createTransaction(transaction))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyDetail);
