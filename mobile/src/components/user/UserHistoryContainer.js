import { connect } from 'react-redux';
import { requestHistory } from '../../actions/historyActions';
import UserHistory from './UserHistory';

const mapStateToProps = state => ({
  history: Object.values(state.history)
});

const mapDispatchToProps = dispatch => ({
  fetchHistory: () => dispatch(requestHistory())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHistory);
