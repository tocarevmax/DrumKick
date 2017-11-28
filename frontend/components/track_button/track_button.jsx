import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TrackButton extends React.Component {

  render() {
    return(
      <button className="artists-detail-track-button">
        track artist
      </button>
    );
  }
}

export default withRouter(TrackButton);
