import merge from 'lodash/merge';

import {RECEIVE_ARTISTS} from '../actions/artists_actions';

const dropdownArtistsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ARTISTS:
      return action.artists;
    default:
      return state;
  }
};

export default dropdownArtistsReducer;
