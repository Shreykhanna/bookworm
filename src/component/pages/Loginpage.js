import React, {Component} from 'react'
import Loginform from '../forms/Loginform'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {login} from '../../actions/auth'
import {withRouter} from 'react-router-dom'
class Loginpage extends Component{
submit=data=>
this.props.login(data).then(() => this.props.history.push("/dashboard"))
 render(){
    return(
      <div>
      <Loginform submit={this.submit}/>
      </div>
    )
  }
}
// Loginpage.propTypes={
//   history:PropTypes.shape({
//      push: PropTypes.func.isRequired
//   }).isRequired,
//   login:PropTypes.func.isRequired
// };
export default withRouter(connect(null,{login})(Loginpage));
