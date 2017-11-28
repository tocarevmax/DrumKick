import { connect } from 'react-redux';

import TrackButton from './track_button.jsx';
import {fetchTracking, createTracking, deleteTracking} from '../../actions/trackings_actions';

const mapStateToProps = (state) => ({
  trackings: state.entities.trackings
});

const mapDispatchToProps = (dispatch) => ({
  fetchTracking: (id) => dispatch(fetchTracking(id)),
  createTracking: (artistId) => dispatch(createTracking(artistId)),
  deleteTracking: (id) => dispatch(deleteTracking(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackButton);
