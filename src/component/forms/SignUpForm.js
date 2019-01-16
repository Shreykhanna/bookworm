import React from 'react'
import {Form,Button} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import Validator from 'validator'
import InlineError from '../messages/InlineError'

export default class SignUpForm extends React.Component{
  state={
      data:{
        email:"",
        password:""
      },
      loading:false,
      errors:{}
  }
  onSubmit=(event)=>{
    event.preventDefault();
    const errors=this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length===0){
      this.setState({loading:true})
      this.props.submit(this.state.data)
      .catch(err => this.setState({errors: err.response.data.errors,loading:false}))
    }
  }
  validate=data =>{
    const errors={};
    if(!Validator.isEmail(data.email)) errors.email="Invalid Email"
    if(!data.password) errors.password="Cannot left empty"
    return errors
  }
  onChange=event =>{
      this.setState({
        data:{...this.state.data,[event.target.name]:event.target.value}
      });
  }
  render()
  {
     const {data,loading,errors}=this.state;
     return(
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Form.Field  error={!!errors.email}>
        <label htmlFor="email">Email</label>
        <input
            type="text"
            placeholder="email"
            value={data.email}
            id="email"
            name="email"
            onChange={this.onChange}/>
            {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field  error={!!errors.password}>
        <input
            type="password"
            placeholder="password"
            value={data.password}
            id="password"
            name="password"
            onChange={this.onChange}/>
            {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button primary> SignUp </Button>
     </Form>
   )
  }
}
