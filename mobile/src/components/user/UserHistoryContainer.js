import { connect } from 'react-redux';
import { requestHistory } from '../../actions/historyActions';
import UserHistory from './UserHistory';

const mapStateToProps = state => {
  console.log('history', state.history);
  return {
    history: state.history.map( el => [el.date, el.money] )
  };
};

const mapDispatchToProps = dispatch => ({
  fetchHistory: () => dispatch(requestHistory())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHistory);
