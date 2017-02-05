import { connect } from 'react-redux';
import UserIndex from './UserIndex';
import { requestUserInfo } from '../../actions/userActions';

const mapStateToProps = state => ({
  user: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestUserInfo: () => dispatch(requestUserInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
