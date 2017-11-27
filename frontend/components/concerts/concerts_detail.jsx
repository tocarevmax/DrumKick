import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ConcertsDetail extends React.Component {

  componentDidMount() {
    this.props.fetchConcert(this.props.match.params.concertId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.concertId !== nextProps.match.params.concertId) {
      this.props.fetchConcert(nextProps.match.params.concertId);
    }
  }

  render () {

    const concert = this.props.concerts[`${this.props.match.params.concertId}`];

    if (!concert) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }

    return (
      <div>
        <h1> This is concert detail </h1>
        <h3>{concert.name}</h3>
      </div>
    );
  }
}

export default withRouter(ConcertsDetail);
