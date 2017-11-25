import React from 'react';
import { Link } from 'react-router-dom';

export default ({artist}) => {
  return (
    <li className="search-artists-item">
      <Link to={`artists/${artist.id}`}><h1>{artist.name}</h1></Link>
      <img className="search-image" src={artist.image_url}/>
      <span>{`Upcoming events: ${artist.upcoming_events}`}</span>
    </li>
  );
};
