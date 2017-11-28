
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// remove when done
// import {fetchFromTMbyArtistName} from './components/seeding/seeding_artists.jsx';
// import {fetchConcertsFromTMbyAttractionId} from './components/seeding/seeding_concerts.jsx';

  // import {fetchSearchResults} from './actions/search_actions';
  // window.fetchSearchResults = fetchSearchResults;
  //
  // import {changeUISearch} from './actions/ui_actions';
  // window.changeUISearch = changeUISearch;

  // import {fetchArtist} from './actions/artists_actions';
  // window.fetchArtist = fetchArtist;

  // import {fetchConcerts} from './util/concerts_api_util';
  // window.fetchConcerts = fetchConcerts;

  import {fetchConcerts} from './actions/concerts_actions';
  window.fetchConcerts = fetchConcerts;

  // import {fetchArtists} from './actions/artists_actions';
  // window.fetchArtists = fetchArtists;

//


document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    var store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    var store = configureStore();
  }

// remove when done
  window.getState = store.getState;
  window.dispatch = store.dispatch;
//

  const root = document.getElementById('root');
  ReactDOM.render(<Root store = { store } />, root);
});
