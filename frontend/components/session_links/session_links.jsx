import React from 'react';
import { Link } from 'react-router-dom';

const notLoggedInDisplay = (changeUISearch) => (
  <div className="notLoggedInDisplay">
    <Link className="signup-link"
       to="/signup"
       onClick={changeUISearch}
    >Sign up</Link>
    <Link className="login-link"
      to="/login"
      onClick={changeUISearch}
    >Log in</Link>
  </div>
);

const loggedInDisplay = (currentUser, logout, changeUISearch,
                        clearTrackings, clearDashboard) => (
	<div className="loggedInDisplay">
    <span className="username-display">
      <Link to='/'
        onClick={changeUISearch}>
        {currentUser.username}
      </Link>
    </span>
    <button className="logout-button" onClick={() => {
      logout();
      changeUISearch();
      clearTrackings();
      clearDashboard();
    }}>Log Out</button>
	</div>
);

const SessionLinks = ({ currentUser, logout, changeUISearch,
                        clearTrackings, clearDashboard }) => {
  if (currentUser) {
    return loggedInDisplay(currentUser, logout, changeUISearch,
                        clearTrackings, clearDashboard);
  } else {
    return notLoggedInDisplay(changeUISearch);
  }
};

export default SessionLinks;
