import { connect } from 'react-redux';

import Dashboard from './dashboard_index';
import {fetchDashboard} from '../../actions/dashboard_actions';

const mapStateToProps = (state) => ({
  dashboard: state.entities.dashboard
});

const mapDispatchToProps = (dispatch) => ({
  fetchDashboard: () => dispatch(fetchDashboard())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
