import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import DropdownConcertsItem from './dropdown-concerts-item';


class DropdownConcerts extends React.Component {

  componentDidMount() {
    this.props.fetchConcerts();
  }

  render() {

    const concerts = this.props.concerts;

    if (!concerts[0]) {
      return null;
    }

    const mappedConcerts = concerts.map((concert, idx) => (
      < DropdownConcertsItem key={`dd-concert${idx}`} concert={concert} />
    ));

    return (
      <div className="menu-content">
        <div className="listing">
          <ul className="popular-artists">
            {mappedConcerts}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(DropdownConcerts);
