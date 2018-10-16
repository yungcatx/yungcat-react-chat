import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AuthPage from '../components/AuthPage'
import {signUp, login} from "../actions";

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signUp,
  login,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPage);
