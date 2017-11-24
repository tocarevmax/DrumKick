import { connect } from 'react-redux';

import { fetchSearchResults } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = (state) => ({
  search: state.entities.search
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearchResults: (name) => dispatch(fetchSearchResults(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
