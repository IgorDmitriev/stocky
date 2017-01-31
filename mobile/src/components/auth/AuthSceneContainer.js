import { connect } from 'react-redux';
import AuthScene from './AuthScene';

import {
  requestLogin
} from '../../actions/userActions';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(requestLogin(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthScene);
