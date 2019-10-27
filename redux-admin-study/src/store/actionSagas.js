import * as API from 'lib/api/login'
import {Actions} from 'store/actionCreators';


export const AUTH_LOGIN_SAGA  ={
  request:(payload)=>API.postLogin(payload),
  pending:()=>Actions.auth_login_pending(),
  success:(data)=>Actions.auth_login_success(data),
  failure:()=>Actions.auth_login_failure(),
}

export const AUTH_LOGOUT_SAGA  ={
  request:(payload)=>API.postLogout(payload),
  pending:()=>Actions.auth_logout_pending(),
  success:(data)=>Actions.auth_logout_success(data),
  failure:()=>Actions.auth_logout_failure(),
}

export const AUTH_TOKEN_SAGA = {
  request:async (payload)=> await API.postToken(payload),
  pending:()=>Actions.auth_login_pending(),
  success:(data)=>Actions.auth_token_success(data),
  failure:()=>Actions.auth_login_failure(),
}