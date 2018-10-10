import { connect } from 'react-redux'
import SignUpForm from './SignUpForm'
import { signUpUser } from './SignUpFormActions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUpFormSubmit: (name) => {
      event.preventDefault();

      dispatch(signUpUser(name))
    }
  }
}

const SignUpFormContainer = withRouter(onnect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm))

export default SignUpFormContainer
