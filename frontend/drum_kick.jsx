
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// remove when done

import {signup} from './util/session_api_util';
window.signup = signup;

window.user = {user: {username: '123', password: '123456', zip: '10005'}};
// remove when done


document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    var store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    var store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store = { store } />, root);
});
