import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ConcertsDetail extends React.Component {

  componentDidMount() {
    this.props.fetchConcert(this.props.match.params.concertId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.concertId !== nextProps.match.params.concertId) {
      this.props.fetchConcert(nextProps.match.params.concertId);
    }
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
            <h1>{concert.artist.name}
              <span className="verified-artist"></span>
            </h1>
            <h3>
              On tour: <strong>{onTour}</strong>
            </h3>

            <button className="artists-detail-track-button">
              track artist
            </button>
          </div>

          <div className="artists-detail-image">
            <img src={concert.image_url}/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default withRouter(ConcertsDetail);
