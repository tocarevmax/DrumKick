import React from 'react';
import { Link } from 'react-router-dom';

const convertTime = (local_date) => {
  // debugger;
  let yyyy = local_date.slice(0,4);
  let mm = local_date.slice(5,7);
  let dd = local_date.slice(8);
  return `${mm}/${dd}/${yyyy}`;
};

export default ({concert}) => {
  return (
    <li className="search-concerts-item">
      <Link to={`concerts/${concert.id}`}><h1>{concert.name}</h1></Link>
      <img className="search-image" src={concert.image_url}/>
      <div className="search-concerts-venue">
        <h3>{convertTime(concert.local_date)}</h3>
        <h3>{concert.venue_name}</h3>
        <h3>{concert.venue_address}</h3>
      </div>
    </li>
  );
};
