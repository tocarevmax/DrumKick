import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SessionLinks from './session_links';
import { changeUISearch } from '../../actions/ui_actions';
import {receiveTrackings} from '../../actions/trackings_actions';
import {receiveDashboard} from '../../actions/dashboard_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  changeUISearch: (bool) => dispatch(changeUISearch({searchPage: false})),
  clearTrackings: () => dispatch(receiveTrackings({})),
  clearDashboard: () => dispatch(receiveDashboard({}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionLinks);
