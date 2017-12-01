import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SearchArtistsItem from './search_artists_item';
import SearchConcertsItem from './search_concerts_item';

class SearchIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  handleUIChange () {
    this.props.changeUISearch(false);
  }

  componentWillUpdate(newProps){
    if (this.props.location.pathname != newProps.location.pathname) {
      this.props.changeUISearch(false);
    }
  }

  render() {
    if (!this.props.search.artists) {
      return null;
    }
    return (
      <div className="search-index">
        <h1 className="search-category-divider">Artists</h1>
          <ul className="search-artists">
            {this.props.search.artists.map((artist, idx) => (
              < SearchArtistsItem
                artist={artist}
                handleUIChange = {this.handleUIChange.bind(this)}
                key={`artists-key-${idx}`}/>
            ))}
          </ul>
        <h1 className="search-category-divider">Concerts</h1>
          <ul className="search-concerts">
            {this.props.search.concerts.map((concert, idx) => (
              < SearchConcertsItem
                concert={concert}
                handleUIChange = {this.handleUIChange.bind(this)}
                key={`concerts-key-${idx}`}/>
            ))}
          </ul>

      </div>
    );
  }
}

// <ul>
//   {this.props.search.artists.map((artist, idx) => (
//     <li
//       key={`artists-key-${idx}`}
//       onClick={this.handleUIChange.bind(this)}
//     >
//       {artist.name}
//     </li>
//   ))}
// </ul>



export default withRouter(SearchIndex);
