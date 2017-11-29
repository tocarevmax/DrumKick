import { connect } from 'react-redux';

import TrackButton from './track_button.jsx';
import {fetchTracking, createTracking, deleteTracking} from '../../actions/trackings_actions';

const mapStateToProps = (state, ownProps) => ({
  tracking: state.entities.trackings[ownProps.artistId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchTracking: (artistId) => dispatch(fetchTracking(artistId)),
  createTracking: (artistId) => dispatch(createTracking(artistId)),
  deleteTracking: (artistId) => dispatch(deleteTracking(artistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackButton);
