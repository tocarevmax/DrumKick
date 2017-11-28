import merge from 'lodash/merge';

import {RECEIVE_CONCERTS} from '../actions/concerts_actions';

const dropdownConcertsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CONCERTS:
      return action.concerts;
    default:
      return state;
  }
};

export default dropdownConcertsReducer;
