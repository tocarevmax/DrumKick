import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import date from 'date-and-time';

class DashboardConcertItem extends React.Component {

  convertTime (date_time) {
    const dateObj = new Date(date_time);
    return date.format(dateObj, 'dddd, MMMM DD YYYY');
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
      <li className="db-concert-item-li">
        <div className="db-concert-item-date">
          <h1>{this.convertTime(concert.date_time)}</h1>
        </div>

        <div className="db-concert-item-main">
          <div className="db-concert-item-img-venue">
            <div className="db-concert-item-img-wrapper search-img-wrapper">
              <img className="search-image" src={concert.artist.image_url}/>
            </div>
            <div className="db-concert-item-date-place">
              <Link to={`/artists/${concert.artist.id}`}>
                <h2 className="db-concert-item-date-link">
                  {concert.artist.name}
                </h2>
              </Link>

              <Link to={`/concerts/${concert.id}`}>
                <h2 className="db-concert-item-date-link">
                  {concert.name}
                </h2>
              </Link>
              <h3>{`${concert.venue_name}, ${this.extractCityState(concert.venue_address)}`}</h3>
            </div>
          </div>

          <div className="db-concert-detail-price-link">
            <div className="db-ticket-price">
              <strong>{`US ${concert.price_range}`}</strong>
            </div>

            <div className="ticket-links">
              <Link to={`/concerts/${concert.id}`}>buy tickets</Link>
            </div>
          </div>

        </div>



      </li>
    );
  }
}

export default withRouter(DashboardConcertItem);
