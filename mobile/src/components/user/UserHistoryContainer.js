import { connect } from 'react-redux';
import UserHistory from './UserHistory';

const mapStateToProps = state => ({
  history: state.history
});

export default connect(mapStateToProps)(UserHistory);
