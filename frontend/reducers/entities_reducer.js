import { combineReducers } from 'redux';

import search from './search_reducer';
import artists from './artists_reducer';
import dropdownArtists from './dropdown_artists_reducer';
import concerts from './concerts_reducer';

export default combineReducers({
  artists,
  concerts,
  search,
  dropdownArtists,
});
