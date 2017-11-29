import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import TrackButtonContainer from '../track_button/track_button_container';

class ConcertsDetail extends React.Component {

  componentDidMount() {
    this.props.fetchConcert(this.props.match.params.concertId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.concertId !== nextProps.match.params.concertId) {
      this.props.fetchConcert(nextProps.match.params.concertId);
    }
  }

  convertTime (local_date) {
    let yyyy = local_date.slice(0,4);
    let mm = local_date.slice(5,7);
    let dd = local_date.slice(8);
    return `${mm}/${dd}/${yyyy}`;
  }

  render () {

    const concert = this.props.concerts[`${this.props.match.params.concertId}`];

    if (!concert) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }

    const onTour = concert.artist.upcoming_events ? "yes" : "no";


    return (
      <div className="artists-detail-main">
        <div className="artist-header">
          <div className="artists-detail-primary">
            <Link to={`/artists/${concert.artist.id}`}>
              <h1>{concert.artist.name}
                <span className="verified-artist"></span>
              </h1>
            </Link>
            <h3>
              On tour: <strong>{onTour}</strong>
            </h3>

            <TrackButtonContainer artistId = {concert.artist.id}
              cl = {"artists-detail-track-button"}
            />

          </div>

          <div className="artists-detail-image">
            <img src={concert.image_url}/>
          </div>
        </div>

        <div className="concerts-detail-main">
          <h1>{concert.name}</h1>

          <div className="concerts-detail-venue">
            <h2>{concert.venue_name}</h2>
            <h3>{concert.venue_address}</h3>
          </div>

          <div className="concerts-detail-time">
            <h3>{this.convertTime(concert.local_date)}</h3>
            <h3>{concert.local_time}</h3>
          </div>


          <div className="artists-detail-ci-price-buy">
            <div className="ticket-info">
              <strong>{`US ${concert.price_range}`}</strong>
            </div>

            <div className="ticket-links">
              <a target="_blank" href={concert.tm_url}>buy tickets</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ConcertsDetail);
