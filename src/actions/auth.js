//import {USER_LOGGED_IN} from '../types';
import api from '../api';

const USER_LOGGED_IN='USER_LOGGED_IN';
const USER_LOGGED_OUT='USER_LOGGED_OUT';

export const userLoggedIn = (user) =>(
  console.log("userloggedin function dispatched"),
  {
  type:USER_LOGGED_IN,
  user
});

export const userLoggedOut = () =>(
  console.log("INSIDE USERLOGGEDOUT FUNCTION"),
  {
    type:USER_LOGGED_OUT
  }
);

export const login=credentials =>dispatch=>api.user.login(credentials).then(user=>{
    console.log("INSIDE ACTION AUTH LOGIN METHOD")
    console.log("VALUE IN THE CREDENTIALS PASSED TO THE LOGIN FUNCTION  : ",credentials)
    console.log("DATA RETURNED FROM LOGIN API : ",user) //Returns user data in json format
    localStorage.bookwormJWT=user.token                //Access token using . operator.
    console.log("EXITING LOGIN METHOD")
    dispatch(userLoggedIn(user))
  });
export const logout=()=>dispatch=>{
      console.log("INSIDE LOGOUT METHOD")
      localStorage.removeItem('bookwormJWT')
      dispatch(userLoggedOut())
      console.log("EXITING LOGOUT METHOD")
    }
