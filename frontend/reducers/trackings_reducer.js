import merge from 'lodash/merge';

import {RECEIVE_TRACKINGS, RECEIVE_TRACKING, DELETE_TRACKING} from '../actions/trackings_actions';

const trackingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TRACKINGS:
      return action.trackings;
    case RECEIVE_TRACKING:
      return merge(newState, {[action.tracking.artist_id]: action.tracking});
    case DELETE_TRACKING:
      delete newState[action.artistId];
      return newState;
    default:
      return state;
  }
};


export default trackingsReducer;
