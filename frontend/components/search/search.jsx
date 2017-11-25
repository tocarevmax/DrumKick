import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SearchIndex from './search_index';


class Search extends React.Component {


  handleUIChange () {
    this.props.changeUISearch(false);
  }

  render() {
    return (
      <div className="main-container">
        <div className="search-container">
          <a onClick={this.handleUIChange.bind(this)}
             className="search-close"
          >
            <img src="http://cdn.onlinewebfonts.com/svg/img_161345.png"/>
          </a>
          <SearchIndex
            search={this.props.search}
            changeUISearch={this.props.changeUISearch}
          />
        </div>
      </div>
    );
  }
}



export default withRouter(Search);
