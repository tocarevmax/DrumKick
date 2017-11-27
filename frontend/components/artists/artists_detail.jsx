import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ArtistsDetailConcerts from './artists_detail_concerts';

class Artists extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.artistId !== nextProps.match.params.artistId) {
      this.props.fetchArtist(nextProps.match.params.artistId);
    }
  }

  render() {
    const artist = this.props.artists[`${this.props.match.params.artistId}`];

    if (!artist) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }

    const onTour = artist.upcoming_events ? "yes" : "no";
    const renderDetails = onTour === "yes" ?
                  <ArtistsDetailConcerts
                    concerts={artist.concerts}
                    localConcerts={artist.localConcerts}
                  /> : null;

    return (
      <div className="artists-detail-main">
        <div className="artist-header">
          <div className="artists-detail-primary">
            <h1>{artist.name}
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
            <img src={artist.image_url}/>
          </div>
        </div>
        {renderDetails}
      </div>
    );
  }
}

export default withRouter(Artists);
