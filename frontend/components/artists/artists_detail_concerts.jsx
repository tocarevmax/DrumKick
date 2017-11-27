import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ArtistsDetailConcertsItem from './artists_detail_concerts_item';

class ArtistsDetailConcerts extends React.Component {


  render() {
    const concerts = this.props.concerts.map((concert, idx) => (
      <ArtistsDetailConcertsItem key={`concert-${idx}`} concert={concert}/>
    ));

    const localConcerts = this.props.localConcerts.map((concert, idx) => (
      <ArtistsDetailConcertsItem key={`local-concert-${idx}`} concert={concert}/>
    ));

    const nearYou = localConcerts.length > 0 ?
        <h1 className="artists-detail-category-h1">Tickets on sale near you</h1>
        : null;

    return (
      <div className="artists-detail-concerts">
        <div className="artists-detail-local-concerts">
          {nearYou}
          <ul className="artists-detail-local-concerts-ul">
            {localConcerts}
          </ul>
        </div>

        <div className="artists-detail-all-concerts">
          <h1 className="artists-detail-category-h1">{`Upcoming concerts (${concerts.length})`}</h1>
          <ul className="artists-detail-all-concerts-ul">
            {concerts}
          </ul>
        </div>

      </div>
    );
  }
}

export default withRouter(ArtistsDetailConcerts);
