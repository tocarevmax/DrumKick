
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// remove when done

  // import {fetchAllTrackings, fetchTracking, createTracking, deleteTracking} from './actions/trackings_actions';
  // window.fetchAllTrackings = fetchAllTrackings;
  // window.fetchTracking = fetchTracking;
  // window.createTracking = createTracking;
  // window.deleteTracking = deleteTracking;
  //
  // import {createTracking, deleteTracking, fetchTracking, fetchAllTrackings} from './util/trackings_api_util';
  // window.fetchAllTrackings = fetchAllTrackings;
  // window.createTracking = createTracking;
  // window.deleteTracking = deleteTracking;
  // window.fetchTracking = fetchTracking;
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
