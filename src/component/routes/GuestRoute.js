import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
const GuestRoute = ({isAuthenticated,component: Component, ...rest})=>(
  <Route {...rest} render={props => isAuthenticated ? <Component {...props}/> : <Redirect to='/dashboard'/>}/>
);
function mapStateToProps(state)
{ 
  return{
   isAuthenticated : !state.user.token
  }
}
export default withRouter(connect(mapStateToProps)(GuestRoute));
