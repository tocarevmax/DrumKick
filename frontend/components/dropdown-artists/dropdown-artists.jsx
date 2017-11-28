import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import DropdownArtistsItem from './dropdown-artists-item';

class DropdownArtists extends React.Component {

  componentDidMount() {
    this.props.fetchArtists();
  }


  render() {

    const artists = this.props.artists;

    if (!artists[0]) {
      return null;
    }

    // const mappedArtists =

    return (
      <div className="menu-content">
        <div className="listing">
          <ul className="popular-artists">
            <li>{artists[0].name}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(DropdownArtists);
