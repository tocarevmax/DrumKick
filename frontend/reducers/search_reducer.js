import merge from 'lodash/merge';

import {RECEIVE_SEARCH_RESULTS} from '../actions/search_actions.js';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.result;
    default:
      return state;
  }
};

export default searchReducer;
