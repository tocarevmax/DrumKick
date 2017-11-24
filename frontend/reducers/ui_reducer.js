import { combineReducers } from 'redux';

import {SET_SEARCH_PAGE} from '../actions/ui_actions';

// import filters from './filters_reducer';

// export default combineReducers({
//   searchPage: false
// });

const _nullState = {searchPage: false};

export default (state = _nullState, action) => {

  switch (action.type) {
    case SET_SEARCH_PAGE:
        return action.action;
    default:
       return state;
  }

  // return ({
  //   searchPage: false
  // });
};




// create action that changes searchPage from true / false
