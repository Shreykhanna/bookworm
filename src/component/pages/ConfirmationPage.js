import React from 'react'
import {Message,Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import{withRouter} from 'react-router-dom'
import {confirm } from'../../actions/auth'
import PropTypes from 'prop-types'
class ConfirmationPage extends React.Component{
  state={
    loading:true,
    success: false
  }
  componentDidMount()
  {
    this.props.confirm(this.props.match.params.token)
    .then(() => this.setState({loading:false,success:true}))
    .catch(() => this.setState({loading:false,success:false}))
  }  render(){
    const {loading,success}=this.state;
    return(
      <div> {loading && (<Message icon>
          <Icon name="Circle notched" loading/>
          <Message.Header>Validating your email</Message.Header>
         </Message>)}
        {!loading && success && <Message success icon>
            <Icon name="checkmark"/>
            <Message.Header>Thank you.Your account has been verified</Message.Header>
            <Link to ='/dashboard'>Go to your dashboard</Link>
           </Message>}>
      </div>
    );
  }
}
ConfirmationPage.propTypes={
   confirm:PropTypes.func.isRequired,
   match:PropTypes.shape({
     params:PropTypes.shape({
     token:PropTypes.string.isRequired
  }).isRequired
}).isRequired
}
export default withRouter(connect(null,{confirm})(ConfirmationPage))
