import * as APIUtil from '../util/dashboard_api_util';

export const RECEIVE_DASHBOARD = 'RECEIVE_DASHBOARD';

export const receiveDashboard = (dashboard) => ({
  type: RECEIVE_DASHBOARD,
  dashboard
});

export const fetchDashboard = () => dispatch => (
  APIUtil.fetchDashboard()
    .then(
      dashboard => ( dispatch(receiveDashboard(dashboard)) )
    )
);
