import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                   username: '',
                   password: ''
                 };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentWillUpdate(newProps) {
    if (this.props.match.path != newProps.match.path) {
      this.props.receiveErrors();
    }
  }

  handleInput(fieldType) {
    return (e) => this.setState({
      [fieldType]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.pushForm({user});
  }

  handleDemoLogin() {
    const user = {
                   username: 'DemoUser',
                   password: '123456'
                 };
    this.props.demoLogin({user});
  }

  sessionLink() {
    if (this.props.pathType === 'login') {
      return <Link to="/signup">Don’t have an account yet? Sign up.</Link>;
    } else {
      return <Link to="/login">Already have an account? Log in.</Link>;
    }
  }

  showErrors() {
    return(
      <ul className="session-errors">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }



  render() {
    return (
      <div className="login-form-container">
        <div className="signup-welcome">
          <h1 className="signup-welcome__header">Be the first to know about concerts</h1>
          <h2 className="signup-welcome__sub">Track your favourite artists and never miss them live.</h2>
        </div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2 className="email-instructions">Please {this.props.pathType}</h2>
          {this.showErrors()}
          <div className="login-form">
            <label>Username
              <input type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                className="login-input"
              />
            </label>
            <label>Password
              <input type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                className="login-input"
              />
            </label>
            <input className="sesssion-submit-button" type="submit" value={this.props.pathType} />
          </div>
          <div className="swap-session">
            {this.sessionLink()}
            <a onClick={this.handleDemoLogin.bind(this)}>
              Demo User
            </a>
          </div>

        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
