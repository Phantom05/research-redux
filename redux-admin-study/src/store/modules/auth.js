import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';
import {cookie,keys} from 'utils'

const cookieEmail = cookie.get(`${keys.user}email`);
const cookieRemember = !!cookie.get(`${keys.user}remember`);
let initialState ={
  authLoginEmail:cookieEmail,
  authLoginRemember:cookieRemember,
  profile:null,  
  autheticate:{
    pending:false,
    success:false,
    failure:false,
    isAutheticated:false,
  },
  register:{
    pending:false,
    result:null,
    success:false,
    failure:false
  }
}


export default handleActions({
  [actions.AUTH_LOGIN_PENDING]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('PENDING');
      draft.autheticate.pending = true;
      draft.autheticate.isAutheticated = false;
      draft.autheticate.failure =false

      draft.profile = null;
    })
  },
  [actions.AUTH_LOGIN_SUCCESS]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('#3');
      draft.autheticate.pending = false;
      draft.autheticate.isAutheticated = true;
      draft.autheticate.failure =false

      draft.profile = diff.profile;
    })
  },
  [actions.AUTH_LOGIN_FAILURE]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log(diff,'diffdiffdiff');
      draft.autheticate.pending = false;
      draft.autheticate.isAutheticated = false;
      draft.autheticate.failure = diff;

      draft.profile = null;
    })
  },

  [actions.AUTH_LOGOUT_PENDING]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.autheticate.isAutheticated = false;
      draft.autheticate.pending = false;
      
      draft.profile = null;
    })
  },
  [actions.AUTH_LOGOUT_SUCCESS]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.autheticate.pending = false;
      draft.autheticate.isAutheticated = false;
      
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
      draft.autheticate.isAutheticated = true;
      draft.profile = diff;
    })
  },
  [actions.AUTH_REGISTER_FAILURE]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log(`AUTH_REGISTER_FAILURE`);
      draft.register.pending = false;
      draft.register.success = false;
      draft.register.failure = diff;
    })
  },


  
},initialState )




