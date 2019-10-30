import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';
import {cookie,keys} from 'utils'

const cookieEmail = cookie.get(`${keys.user}email`);
const cookieRemember = !!cookie.get(`${keys.user}remember`);
let initialState ={
  authLoginEmail:cookieEmail,
  authLoginRemember:cookieRemember,
  pending:false,
  response:0,
  isAutheticated:false,
  profile:null,
  register:{
    pending:false,
    result:null,
    success:false,
  }
}


export default handleActions({
  [actions.AUTH_LOGIN_PENDING]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('PENDING');
      draft.pending = true;
      draft.response = 0;
      draft.profile = null;
      draft.isAutheticated = false;
    })
  },
  [actions.AUTH_LOGIN_SUCCESS]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('#3');
      draft.pending = false;
      draft.response = diff.result;
      draft.profile = diff.profile;
      draft.isAutheticated = true;
    })
  },
  [actions.AUTH_LOGIN_FAILURE]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.pending = false;
      draft.response = diff;
      draft.profile = null;
      draft.isAutheticated = false;
    })
  },

  [actions.AUTH_LOGOUT_PENDING]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.pending = false;
      draft.response = 0;
      draft.profile = null;
      draft.isAutheticated = false;

    })
  },
  [actions.AUTH_LOGOUT_SUCCESS]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.pending = false;
      draft.response = 0;
      draft.isAutheticated = false;
      draft.profile = null;
    })
  },
  [actions.AUTH_LOGOUT_FAILURE]:(state,{payload:diff})=>{
    return produce(state,draft=>{

    })
  },

  [actions.AUTH_REGISTER_PENDING]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log(`AUTH_REGISTER_PENDING`);
      draft.register.pending = true;
    })
  },
  [actions.AUTH_REGISTER_SUCCESS]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log(`AUTH_REGISTER_SUCCESS`);
      draft.register.pending = false;
      draft.register.success = true;
      draft.isAutheticated = true;
      draft.profile = diff;
    })
  },
  [actions.AUTH_REGISTER_FAILURE]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log(`AUTH_REGISTER_FAILURE`);
      draft.register.pending = false;
      draft.register.success = false;
    })
  },


  
},initialState )




