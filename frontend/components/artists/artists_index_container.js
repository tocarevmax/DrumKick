import { connect } from 'react-redux';

import ArtistsIndex from './artists_index';

const mapStateToProps = (state) => ({
  artists: state.entities.dropdownArtists
});

export default connect(
  mapStateToProps,
  null
)(ArtistsIndex);
