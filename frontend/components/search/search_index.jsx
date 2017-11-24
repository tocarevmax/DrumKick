import React from 'react';
import { Link, withRouter } from 'react-router-dom';


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
      return (<h1>Nothing to render</h1>);
    }
    return (
      <div>
        <h1>Search Results</h1>
        <h3>Artists:</h3>
        <ul>
          {this.props.search.artists.map((artist, idx) => (
            <li
              key={`artists-key-${idx}`}
              onClick={this.handleUIChange.bind(this)}
            >
              {artist.name}
            </li>
          ))}
        </ul>

        <h3>Concerts:</h3>
        <ul>
          {this.props.search.concerts.map((concert, idx) => (
            <li key={`concerts-key-${idx}`}>{concert.name}</li>
          ))}
        </ul>

      </div>
    );
  }
}

// const SearchIndex = ({search, changeUISearch}) => {
//
//
//
//
// };

export default withRouter(SearchIndex);
