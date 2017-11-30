import { connect } from 'react-redux';

import Dashboard from './dashboard_index';
import {fetchDashboard} from '../../actions/dashboard_actions';
import {fetchAllTrackings} from '../../actions/trackings_actions';

const mapStateToProps = (state) => ({
  dashboard: state.entities.dashboard,
  trackings: state.entities.trackings,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchDashboard: () => dispatch(fetchDashboard()),
  fetchAllTrackings: () => dispatch(fetchAllTrackings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
