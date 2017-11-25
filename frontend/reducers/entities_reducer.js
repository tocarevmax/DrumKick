import { combineReducers } from 'redux';

import search from './search_reducer';
import artists from './artists_reducer';

export default combineReducers({
  artists,
  search,
});
