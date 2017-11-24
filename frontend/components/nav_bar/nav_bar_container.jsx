import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions/search_actions';

import NavBar from './nav_bar';

const mapStateToProps = (state) => ({
  ui: state.ui
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearchResults: (name) => dispatch(fetchSearchResults(name)),
  // changeUISearch   - regular action,
  //           type: SET_SEARCH_PAGE
  //           action: {searchPage: true/false}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
