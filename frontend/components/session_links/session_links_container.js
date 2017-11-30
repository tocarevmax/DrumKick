import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SessionLinks from './session_links';
import { changeUISearch } from '../../actions/ui_actions';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  changeUISearch: (bool) => dispatch(changeUISearch({searchPage: false}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionLinks);
