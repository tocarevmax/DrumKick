import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Dashboard extends React.Component {

  render() {
    return(
      <div>
        <h1>{"This is user dashboard"}</h1>
      </div>
    );
  }
}

export default withRouter(Dashboard);
