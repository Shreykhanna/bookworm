import React       from 'react'
import PropTypes   from 'prop-types'
import {connect}   from 'react-redux'
import SignupForm  from '../forms/SignUpForm'
import {signup}    from '../../actions/signup'
import {withRouter} from 'react-router-dom'

class SignupPage extends React.Component{
  submit=(data) =>this.props.signup(data).then(this.props.history.push('/dashboard'))
  render()
  {
    return(
     <div>
      <SignupForm submit={this.submit} />
    </div>
   );
  }
}

  SignupPage.propTypes={
      history : PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    signup:PropTypes.func.isRequired

  }

export default withRouter(connect(null,{signup})(SignupPage));
