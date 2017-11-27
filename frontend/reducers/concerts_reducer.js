import merge from 'lodash/merge';

import {RECEIVE_CONCERT} from '../actions/concerts_actions';

const concertsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CONCERT:
      return merge(newState, {[action.concert.id]: action.concert});
    default:
      return state;
  }
};

export default concertsReducer;
