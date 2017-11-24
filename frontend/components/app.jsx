import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionLinksContainer from './session_links/session_links_container';
import SessionFormContainer from './session_form/session_form_container';
import TestProtectedContainer from './test_protected_component/test_protected_component';
import SplashPage from './splash_page/splash_page';
import Footer from './footer/footer';
import SearchContainer from './search/search_container';

const App = () => (
  <div>
    <div className="navigation">
      <div className="navigation-large-screen">
        <ul className="nav-bar">
          <li className="sub-nav">
            <ul>
              <li className="logo">
                <Link to="/" className="to-root-link">
                  <img className="logo-img" src="https://assets.sk-static.com/assets/nw/furniture/songkick-logo-ac43b7a.svg" />
                </Link>
              </li>

              <li className="nav-item metro-area menu hover-for-touch">
                <Link to="/">
                  SF Bay Area concerts
                </Link>
              </li>

              <li className="nav-item artists menu hover-for-touch">
                <Link to="/">
                  Artists
                </Link>
              </li>

              <li className="nav-item about-us">
                <Link to="/">
                  About us
                </Link>
              </li>

            </ul>
          </li>

          <li className="sub-nav">
            <ul>
              <li className="search">
                <form className="navigation-search-form">
                  <input
                    className="text navigation-search"
                    name="query"
                    type="search"
                    placeholder="Find concerts for any artist or city"
                  >

                </input>
                <button
                  className="search-button"
                  type="submit"
                >
                <img
                  src="https://assets.sk-static.com/assets/nw/components/navigation-large-screen/search-5510d8d.svg"
                  className="navigation-submit"
                />
                </button>
                </form>
              </li>

              <li className="login-signup">
                <SessionLinksContainer />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div className="main-container">
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute path="/protected" component={TestProtectedContainer} />
        <Route path="/search" component={SearchContainer} />
        <Route path="/" component={SplashPage} />
      </Switch>
    </div>
    <Route path="/" component={Footer} />
  </div>
);

export default App;
