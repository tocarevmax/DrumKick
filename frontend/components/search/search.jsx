import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SearchIndex from './search_index';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {q: ''};
  }


  update(e) {
    this.setState({
      q: e.currentTarget.value
    });
    this.props.fetchSearchResults(e.currentTarget.value);
  }


  render() {
    return (
      <div>
        <h1>This is search</h1>
        <form>
          <label>Search:
            <input
              type="text"
              onChange={this.update.bind(this)}
              className="search-input"
            />
          </label>
        </form>

        <SearchIndex search={this.props.search}/>

      </div>
    );

  }
}

export default withRouter(Search);
