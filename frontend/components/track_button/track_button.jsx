import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TrackButton extends React.Component {

  componentDidMount() {
    this.props.fetchTracking(this.props.artistId);
  }

  handleClick(type) {
    if (type === "track") {
      return () => {
        this.props.createTracking(this.props.artistId);
      };
    } else if (type === "untrack") {
      return () => {
        this.props.deleteTracking(this.props.artistId);
      };
    }
  }

  render() {

    if (this.props.tracking) {
      return(
        <button className="artists-detail-track-button"
                onClick={this.handleClick("untrack")}
        >
          untrack artist
        </button>
      );
    } else {
      return(
        <button className="artists-detail-track-button"
                onClick={this.handleClick("track")}
        >
          track artist
        </button>
      );
    }

  }
}

export default withRouter(TrackButton);
