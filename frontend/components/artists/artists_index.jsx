import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ArtistsIndexItem from '../search/search_artists_item';

class ArtistsIndex extends React.Component {

  render() {
    const mappedArtistsItems = this.props.artists.map((artist,idx) => (
      < ArtistsIndexItem
          key={`artist-index-item-${idx}`}
          artist={artist}
          handleUIChange={() => {}} />
    ));

    return(
      <div className="search-index">
        <ul className="search-artists">
          {mappedArtistsItems}
        </ul>
      </div>
    );
  }
}

export default withRouter(ArtistsIndex);
