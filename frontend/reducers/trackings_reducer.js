import merge from 'lodash/merge';

import {RECEIVE_TRACKING, DELETE_TRACKING} from '../actions/trackings_actions';

const trackingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TRACKING:
      return merge(newState, {[action.tracking.id]: action.tracking});
    case DELETE_TRACKING:
      delete newState[action.trackingId];
      return newState;
    default:
      return state;
  }
};


export default trackingsReducer;
