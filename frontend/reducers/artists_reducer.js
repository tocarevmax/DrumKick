import merge from 'lodash/merge';

import {RECEIVE_ARTIST} from '../actions/artists_actions';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      return merge(newState, {[action.artist.id]: action.artist});
    default:
      return state;
  }
};

export default artistsReducer;
