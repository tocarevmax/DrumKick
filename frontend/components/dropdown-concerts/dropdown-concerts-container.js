import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import DropdownConcerts from './dropdown-concerts';

import {fetchConcerts} from '../../actions/concerts_actions';

const mapStateToProps = (state) => ({
  concerts: state.entities.dropdownConcerts
});

const mapDispatchToProps = (dispatch) => ({
  fetchConcerts: () => dispatch(fetchConcerts())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownConcerts));
