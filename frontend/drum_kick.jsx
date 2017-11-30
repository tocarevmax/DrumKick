
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// remove when done

import {startFetchingArtistsFromList} from './util/seeding/seeding_artists';

window.startFetchingArtistsFromList = startFetchingArtistsFromList;

  // import {fetchDashboard} from './actions/dashboard_actions';

  // import {fetchDashboard} from './util/dashboard_api_util';
  // window.fetchDashboard = fetchDashboard;
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
  // window.dispatch = store.dispatch;
//

  const root = document.getElementById('root');
  ReactDOM.render(<Root store = { store } />, root);
});
