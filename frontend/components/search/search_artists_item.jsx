import React from 'react';
import { Link } from 'react-router-dom';




export default ({artist, handleUIChange}) => {
  return (
    <li className="search-artists-item">
      <div className="search-artists-item-wrapper">
        <div className="search-artists-item-info">
          <Link to={`/artists/${artist.id}`}
                onClick={handleUIChange}
          ><h1>{artist.name}</h1></Link>
          <span>{`${artist.upcoming_events} concerts`}</span>
        </div>
        <button className="track-artist-search-button">Track artist</button>
      </div>
      <div className="search-img-wrapper">
        <img className="search-image" src={artist.image_url}/>
      </div>
    </li>
  );
};


// <li className="search-artists-item">
//   <img className="search-image" src={artist.image_url}/>
//   <div className="search-artists-item-info">
//     <Link to={`artists/${artist.id}`}><h1>{artist.name}</h1></Link>
//     <span>{`Upcoming events: ${artist.upcoming_events}`}</span>
//   </div>
// </li>
