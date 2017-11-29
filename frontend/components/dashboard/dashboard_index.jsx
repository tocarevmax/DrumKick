import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import DashboardIndexArtistItem from './dashboard_index_artist_item';
import DashboardConcertItem from './dashboard_concert_item';

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

    const mappedConcerts = concerts.map((concert, idx) => (
      < DashboardConcertItem key={`concert-dd-${idx}`} concert={concert} />
    ));

    const mappedArtistsOnTour = artistsOnTour.map((artist, idx) => (
      < DashboardIndexArtistItem key={`artist-ont-${idx}`} artist={artist} />
    ));

    const mappedArtistsNotOnTour = artistsNotOnTour.map((artist, idx) => (
      < DashboardIndexArtistItem key={`artist-not-ont-${idx}`} artist={artist} />
    ));

    return(
      <div className="dashboard-main-container">
        <div className="main-pane">
          <ul className="dashboard-concert-list">
          {mappedConcerts}
          </ul>
        </div>

        <div className="side-pane">
          <h1>{"On tour"}</h1>
          <ul className="dashboard-artists-on-tour">
            {mappedArtistsOnTour}
          </ul>

          <h1>{"Not on tour"}</h1>
          <ul className="dashboard-artists-not-on-tour">
            {mappedArtistsNotOnTour}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
