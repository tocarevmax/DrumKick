import { connect } from 'react-redux';

import Dashboard from './dashboard_index';
import {fetchDashboard} from '../../actions/dashboard_actions';
import {fetchAllTrackings} from '../../actions/trackings_actions';
import {fetchConcerts} from '../../actions/concerts_actions';


const mapStateToProps = (state) => ({
  dashboard: state.entities.dashboard,
  trackings: state.entities.trackings,
  currentUser: state.session.currentUser,
  ddConcerts: state.entities.dropdownConcerts
});

const mapDispatchToProps = (dispatch) => ({
  fetchDashboard: () => dispatch(fetchDashboard()),
  fetchAllTrackings: () => dispatch(fetchAllTrackings()),
  fetchDDConcerts: () => dispatch(fetchConcerts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
