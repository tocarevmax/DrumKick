import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class DropdownArtists extends React.Component {

  componentDidMount() {
    this.props.fetchArtists();
  }


  render() {

    const artists = this.props.artists;

    if (!artists[0]) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }

    return (
      <div className="menu-content">
        <div className="listing">
          <ul className="popular-artists">
            <li>{artists[0].name}</li>
          </ul>
        </div>
        <h1>{"this is dropdown"}</h1>
      </div>
    );
  }
}

export default withRouter(DropdownArtists);
