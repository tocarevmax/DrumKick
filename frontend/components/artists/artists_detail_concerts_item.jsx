import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArtistsDetailConcertsItem extends React.Component {

  convertTime (local_date) {
    let yyyy = local_date.slice(0,4);
    let mm = local_date.slice(5,7);
    let dd = local_date.slice(8);
    return `${mm}/${dd}/${yyyy}`;
  }

  extractCityState (str) {
    let firstComma = str.indexOf(',');
    let slicedStr = str.slice(firstComma+2);
    let secondComma = slicedStr.indexOf(',');
    let finalStr = slicedStr.slice(0, secondComma+4);
    return finalStr;
  }

  render() {
    const concert = this.props.concert;
    return (
      <li className="artists-detail-ci-li">
        <div className="artists-detail-ci-date-place">
          <Link to={`/concerts/${concert.id}`}>
            <h2 className="artists-detail-ci-date-link">
              {`${this.convertTime(concert.local_date)}  -  ${concert.name}`}
            </h2>
          </Link>
          <h3>{`${concert.venue_name}, ${this.extractCityState(concert.venue_address)}`}</h3>
        </div>

        <div className="artists-detail-ci-price-buy">
          <div className="ticket-info">
            <strong>{`US ${concert.price_range}`}</strong>
          </div>

          <div className="ticket-links">
            <Link to={`/concerts/${concert.id}`}>buy tickets</Link>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(ArtistsDetailConcertsItem);
