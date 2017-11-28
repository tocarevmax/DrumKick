import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const DropdownArtistsItem = ({artist}) => {
  return (
    <li className="dd-artist-item-name">
      <div className="dd-artist-item-img-wrapper">
        <img src={artist.image_url}/>
      </div>
      <Link to={`/artists/${artist.id}`}>
        <h1>{artist.name}</h1>
      </Link>
    </li>
  );
};

export default withRouter(DropdownArtistsItem);
