import {USER_LOGGED_IN} from '../types';
import {USER_LOGGED_OUT} from '../types';
export default function user(state={},action={}){
  switch(action.type){
    case USER_LOGGED_IN:
        console.log("User state : "+action.user);
        return action.user;
    case USER_LOGGED_OUT:
          return {};
     default:
        console.log("State : "+state);
        return state;
  }
}
