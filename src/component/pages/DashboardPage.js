import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import ConfirmedEmailMessage from '../messages/ConfirmedEmailMessage'
import {withRouter} from 'react-router-dom'
const  DashboardPage = ({isConfirmed}) => (
  <div> {!isConfirmed && <ConfirmedEmailMessage/>} </div>
)
function mapStateToProps(state){
  return{
  isConfirmed: state.user.confirmed
}
}

export default withRouter(connect(mapStateToProps)(DashboardPage));
