
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


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
