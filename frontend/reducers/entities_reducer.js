import { combineReducers } from 'redux';

import search from './search_reducer';
import artists from './artists_reducer';
import dropdownArtists from './dropdown_artists_reducer';
import dropdownConcerts from './dropdown_concerts_reducer';
import concerts from './concerts_reducer';
import trackings from './trackings_reducer';

export default combineReducers({
  artists,
  concerts,
  search,
  trackings,
  dropdownArtists,
  dropdownConcerts,
});
