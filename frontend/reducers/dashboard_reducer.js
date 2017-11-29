import merge from 'lodash/merge';

import {RECEIVE_DASHBOARD} from '../actions/dashboard_actions';

const dashboardReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_DASHBOARD:
      return action.dashboard;
    default:
      return state;
  }
};

export default dashboardReducer;
