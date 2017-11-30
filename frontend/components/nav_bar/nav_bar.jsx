import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SessionLinksContainer from '../session_links/session_links_container';
import NavBarSearchFrom from './nav_bar_search_form';
import DropdownArtistsContainer from '../dropdown-artists/dropdown-artists-container';
import DropdownConcertsContainer from '../dropdown-concerts/dropdown-concerts-container';

class NavBar extends React.Component {

  handUiChange() {
    this.props.changeUISearch(false);
  }

  render() {
    return (
      <div className="navigation">
        <div className="navigation-large-screen">
          <ul className="nav-bar">
            <li className="sub-nav">
              <ul>
                <li className="logo">
                  <Link to="/" className="to-root-link"
                    onClick={this.handUiChange.bind(this)}
                  >
                    <img className="logo-img" src="https://assets.sk-static.com/assets/nw/furniture/songkick-logo-ac43b7a.svg" />
                  </Link>
                </li>

                <li className="nav-item metro-area menu hover-for-touch">
                  < DropdownConcertsContainer />
                  <Link to="/"
                    onClick={this.handUiChange.bind(this)}
                  >
                    SF Bay Area concerts
                  </Link>
                </li>

                <li className="nav-item artists menu hover-for-touch">
                  < DropdownArtistsContainer />
                  <Link to="/"
                    onClick={this.handUiChange.bind(this)}
                  >
                    Artists
                  </Link>
                </li>

              </ul>
            </li>

            <li className="sub-nav">
              <ul>
                <li className="search">
                  < NavBarSearchFrom
                      fetchSearchResults={this.props.fetchSearchResults}
                      changeUISearch={this.props.changeUISearch}
                  />
                </li>

                <li className="login-signup">
                  <SessionLinksContainer />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}



export default withRouter(NavBar);
