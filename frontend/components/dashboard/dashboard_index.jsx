import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Dashboard extends React.Component {

  componentDidMount() {
    this.props.fetchDashboard();
  }

  render() {
    const concerts = this.props.dashboard.concerts;
    const artistsOnTour = this.props.dashboard.artists_on_tour;
    const artistsNotOnTour = this.props.dashboard.artists_not_on_tour;

    if (!this.props.dashboard.concerts) {
      return null;
    }

    return(
      <div>
        <h1>{"This is user dashboard"}</h1>
        <h2></h2>
      </div>
    );
  }
}

export default withRouter(Dashboard);
