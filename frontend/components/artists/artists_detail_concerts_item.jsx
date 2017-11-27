import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArtistsDetailConcertsItem extends React.Component {
  render() {
    const concert = this.props.concert;
    return (
      <li>
        {concert.name}
      </li>
    );
  }
}

export default withRouter(ArtistsDetailConcertsItem);
