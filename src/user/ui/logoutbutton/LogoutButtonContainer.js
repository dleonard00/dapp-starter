import { connect } from 'react-redux'
import LogoutButton from './LogoutButton'
import { logoutUser } from './LogoutButtonActions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutUserClick: (event) => {
      event.preventDefault();

      dispatch(logoutUser())
    }
  }
}

const LogoutButtonContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton))

export default LogoutButtonContainer
