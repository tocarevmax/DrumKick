import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default ({artist}) => {
  return(
    <li>
      <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
    </li>
  );
};
