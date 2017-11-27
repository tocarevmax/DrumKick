import { connect } from 'react-redux';

import ConcertsDetail from './concerts_detail';
import {fetchConcert} from '../../actions/concerts_actions';

const mapStateToProps = (state) => ({
  concerts: state.entities.concerts
});

const mapDispatchToProps = (dispatch) => ({
  fetchConcert: (id) => dispatch(fetchConcert(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConcertsDetail);
