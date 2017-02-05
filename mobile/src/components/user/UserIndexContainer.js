import { connect } from 'react-redux';
import UserIndex from './UserIndex';

const mapStateToProps = state => ({
  user: state.currentUser
});

export default connect(mapStateToProps)(UserIndex);
