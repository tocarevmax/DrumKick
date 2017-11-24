import { connect } from 'react-redux';

import { fetchSearchResults } from '../../actions/search_actions';
import Search from './search';

import { changeUISearch } from '../../actions/ui_actions';


const mapStateToProps = (state) => ({
  search: state.entities.search
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearchResults: (name) => dispatch(fetchSearchResults(name)),
  changeUISearch: (bool) => dispatch(changeUISearch({searchPage: bool})),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
