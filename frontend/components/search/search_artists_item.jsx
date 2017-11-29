import React from 'react';
import { Link } from 'react-router-dom';

import TrackButtonContainer from '../track_button/track_button_container';


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
        <TrackButtonContainer artistId = {artist.id}
            cl={"track-artist-search-button"}

        />

      </div>
      <div className="search-img-wrapper">
        <img className="search-image" src={artist.image_url}/>
      </div>
    </li>
  );
};



// <button className="track-artist-search-button">Track artist</button>
