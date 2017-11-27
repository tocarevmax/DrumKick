import { connect } from 'react-redux';

import Artists from './artists_detail';
import {fetchArtist} from '../../actions/artists_actions';

const mapStateToProps = (state) => ({
  artists: state.entities.artists
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtist: (id) => dispatch(fetchArtist(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artists);
