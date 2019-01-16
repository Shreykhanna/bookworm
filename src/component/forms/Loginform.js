import React,{Component} from 'react'
import {Form,Button,Message} from 'semantic-ui-react'
import Validator from 'validator'
import InlineError from '../messages/InlineError'
import PropTypes from 'prop-types'
export default class Loginform extends Component{
  state={
    data:{
      email: "",
      password: ""
    },
    loading:false,
    errors:{}
  }
  onChange = e =>{
     console.log("Inside onchange method");
     this.setState({
     data : {...this.state.data,[e.target.name]: e.target.value }
   });
   console.log("Name and value : "+e.target.name+","+e.target.value);
   console.log("Value in data : "+this.state.data.email+","+this.state.data.password);
 }
   onSubmit= () =>{
     console.log("Inside onsubmit method");
     const errors=this.validate(this.state.data);
     this.setState({errors});
     console.log("Errors email and password : "+errors.email +","+errors.password);
     console.log("Errors object length : "+Object.keys(errors).length);
     if(Object.keys(errors).length===0)
     {
       console.log("VALUE OF DATA INSIDE IF LOOP : ",this.state.data);
        this.props.submit(this.state.data)
       .catch(err => this.setState({errors:err.response.data.errors}));
     }
   };
   validate= (data) =>{
      console.log("Inside validate method");
      const errors={};
      if(!Validator.isEmail(data.email)) errors.email="Invalid email";
      if(!data.password) errors.password="Cannot be blank";
      return errors;
   }
  render(){
    const {data,errors}=this.state;
    return(
        <Form onSubmit={this.onSubmit}>
        {errors.global && <Message negative>
          <Message.Header>Something went wrong</Message.Header>
          <p>{errors.global}</p>
        </Message>}
        <Form.Field errors={!!errors.email}>
        <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                value={data.email}
                onChange={this.onChange}/>
                {errors.email && <InlineError text={errors.email}/>}
        </Form.Field>
        <Form.Field errors={!!errors.password}>
        <label htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={data.password}
                onChange={this.onChange}
                />
                {errors.password && <InlineError text={errors.password}/>}
         </Form.Field>
        <Button primary>Login</Button>
        </Form>
     );
  }
}
Loginform.propTypes = {
  submit:PropTypes.func.isRequired
}
