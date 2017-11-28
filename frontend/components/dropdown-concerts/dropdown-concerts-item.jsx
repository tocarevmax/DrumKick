import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export const sliceName = (str) => {
  if (str.length > 20) {
    return `${str.slice(0,20)}...`;
  } else {
    return str;
  }
};

const DropdownConcertsItem = ({concert}) => {
  return (
    <li className="dd-artist-item-name">
      <div className="dd-artist-item-img-wrapper">
        <img src={concert.image_url}/>
      </div>
      <Link to={`/concerts/${concert.id}`}>
        <h1>{sliceName(concert.name)}</h1>
        <h1>{sliceName(concert.venue_name)}</h1>
      </Link>
    </li>
  );
};


export default withRouter(DropdownConcertsItem);
