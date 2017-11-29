import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/welcome" />
    )
  )} />
);

const Ternary = ({
  trueComponent: TrueComponent,
  falseComponent: FalseComponent,
  path,
  searchPage}) => (

  <Route path={path} render={(props) => (
    searchPage ? (
      <TrueComponent {...props} />
    ) : (
      <FalseComponent {...props} />
    )
  )} />
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.currentUser)}
);

const TernaryMapStateToProps = state => ({
  searchPage: state.ui.searchPage  // returns true/false
});

export const TernaryRoute = withRouter(connect(TernaryMapStateToProps, null)(Ternary));

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
