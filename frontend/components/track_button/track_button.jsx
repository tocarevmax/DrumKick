import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TrackButton extends React.Component {

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchTracking(this.props.artistId);
    }
  }

  handleClick(type) {
    if (type === "track") {
      return () => {
        if (this.props.currentUser) {
          this.props.createTracking(this.props.artistId);
        } else {
          console.log("not logged in");
        }
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
        <button className={this.props.cl}
                onClick={this.handleClick("untrack")}
        >
          untrack artist
        </button>
      );
    } else {
      return(
        <button className={this.props.cl}
                onClick={this.handleClick("track")}
        >
          track artist
        </button>
      );
    }

  }
}

export default withRouter(TrackButton);
