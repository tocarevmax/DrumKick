import React from 'react';
import { Link } from 'react-router-dom';

const notLoggedInDisplay = () => (
  <div className="notLoggedInDisplay">
    <Link className="signup-link" to="/signup">Sign up</Link>
    <Link className="login-link" to="/login">Log in</Link>
  </div>
);

const loggedInDisplay = (currentUser, logout) => (
	<div className="loggedInDisplay">
    <span className="username-display">{currentUser.username}</span>
    <button className="logout-button" onClick={logout}>Log Out</button>
	</div>
);

const SessionLinks = ({ currentUser, logout }) => {
  if (currentUser) {
    return loggedInDisplay(currentUser, logout);
  } else {
    return notLoggedInDisplay();
  }
};

export default SessionLinks;
