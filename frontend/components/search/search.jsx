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
      <div className="main-container">
        <h1>This is search</h1>


        <SearchIndex search={this.props.search}/>

      </div>
    );

  }
}

// <form>
//   <label>Search:
//     <input
//       type="text"
//       onChange={this.update.bind(this)}
//       className="search-input"
//     />
//   </label>
// </form>


export default withRouter(Search);
