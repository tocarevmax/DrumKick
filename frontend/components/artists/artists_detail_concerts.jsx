import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArtistsDetailConcerts extends React.Component {

  render() {
    return (
      <div className="artists-detail-concerts">
        <h1>These are concerts</h1>
      </div>
    );
  }
}

export default withRouter(ArtistsDetailConcerts);
