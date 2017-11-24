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

import NavBarContainer from './nav_bar/nav_bar_container';
import Body from './body';

const App = () => (
  <div>

    <Route path="/" component={NavBarContainer} />
    <TernaryRoute path="/"
      trueComponent={SearchContainer}
      falseComponent={Body} />
    <Route path="/" component={Footer} />

  </div>
);

export default App;
