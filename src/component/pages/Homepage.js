import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from  '../../actions/auth'
import {withRouter} from 'react-router-dom'

const Homepage = ({isAuthenticated,logout})=>(
  <div>
  <h1>Home Page</h1>
  { isAuthenticated ? <button onClick={() => logout()}>Logout</button> :
  (<div><Link to="/login">Login</Link> or <Link to="/signup">SignUp</Link></div>) }
  </div>
);
Homepage.propTypes={
  isAuthenticated : PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}
function mapStateToProps(state)
{
  return {
    isAuthenticated : !!state.user.token
  }
}
export default withRouter(connect(mapStateToProps,{logout})(Homepage));
