import { connect } from 'react-redux'
import LoginButton from './LoginButton'
import { loginUser } from './LoginButtonActions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUserClick: (event) => {
      event.preventDefault();

      dispatch(loginUser())
    }
  }
}

const LoginButtonContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton))

export default LoginButtonContainer
