import { connect } from 'react-redux';

import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const pathType = location.pathname.slice(1);
  const pushForm = (pathType === 'login') ? login : signup;
  return {
    pushForm: user => dispatch(pushForm(user)),
    receiveErrors: () => dispatch(receiveErrors([])),
    demoLogin: user => dispatch(login(user)),
    pathType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
