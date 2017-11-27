import React from 'react';
import { Link } from 'react-router-dom';

const convertTime = (local_date) => {
  // debugger;
  let yyyy = local_date.slice(0,4);
  let mm = local_date.slice(5,7);
  let dd = local_date.slice(8);
  return `${mm}/${dd}/${yyyy}`;
};

const extractCityState = (str) => {
  let firstComma = str.indexOf(',');
  let slicedStr = str.slice(firstComma+2);
  let secondComma = slicedStr.indexOf(',');
  let finalStr = slicedStr.slice(0, secondComma+4);
  return finalStr;
};

export default ({concert, handleUIChange}) => {
  return (
    <li className="search-concerts-item">
      <div className="search-concerts-item-info">
        <div className="search-concerts-item-date-name">


          <h3 className="search-concert-date">{convertTime(concert.local_date)}</h3>
          <Link
            to={`/concerts/${concert.id}`}
            className="search-concert-name"
            onClick={handleUIChange}
          >
            <h1>{concert.name}</h1>
          </Link>
        </div>
        <div className="search-concert-venue">
          <h3 className="search-concert-venue-name">{concert.venue_name}</h3>
          <h3 className="search-concert-venue-address">{extractCityState(concert.venue_address)}</h3>
        </div>
      </div>
      <div className="search-img-wrapper">
        <img className="search-image" src={concert.image_url}/>
      </div>
    </li>
  );
};
