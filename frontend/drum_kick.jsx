
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// remove when done
// import {fetchFromTMbyArtistName} from './components/seeding/seeding_artists.jsx';
// import {fetchConcertsFromTMbyAttractionId} from './components/seeding/seeding_concerts.jsx';
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
  // window.getState = store.getState;
//

  const root = document.getElementById('root');
  ReactDOM.render(<Root store = { store } />, root);
});
