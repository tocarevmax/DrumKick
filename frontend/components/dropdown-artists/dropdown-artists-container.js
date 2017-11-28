import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


import DropdownArtists from './dropdown-artists';
import {fetchArtists} from '../../actions/artists_actions';

const mapStateToProps = (state) => ({
  artists: state.entities.dropdownArtists
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtists: () => dispatch(fetchArtists())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownArtists));
