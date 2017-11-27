import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute, TernaryRoute } from '../util/route_util';

import SessionLinksContainer from './session_links/session_links_container';
import SessionFormContainer from './session_form/session_form_container';
import TestProtectedContainer from './test_protected_component/test_protected_component';
import SplashPage from './splash_page/splash_page';
import Footer from './footer/footer';
import SearchContainer from './search/search_container';

import ArtistsContainer from './artists/artists_detail_container';
import ConcertsContainer from './concerts/concerts_detail_container';

const Body = () => (
  <div className="main-container">
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/protected" component={TestProtectedContainer} />
      <Route path="/artists/:artistId" component={ArtistsContainer} />
      <Route path="/concerts/:concertId" component={ConcertsContainer} />
      <Route path="/" component={SplashPage} />
    </Switch>
  </div>
);

export default Body;
