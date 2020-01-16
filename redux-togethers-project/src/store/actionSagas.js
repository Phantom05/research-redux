import * as API from 'lib/api';
import {Actions} from 'store/actionCreators';

export const AUTH_LOGIN_SAGA  ={
  request:(payload)=>API.postLogin(payload),
  pending:()=>Actions.auth_login_pending(),
  success:(data)=>Actions.auth_login_success(data),
  failure:(data)=>Actions.auth_login_failure(data),
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
  failure:(data)=>Actions.auth_login_failure(data),
}

export const AUTH_SIGNUP_SAGA = {
  request:async (payload)=> await API.postRegister(payload),
  pending:()=>Actions.auth_register_pending(),
  success:(data)=>Actions.auth_register_success(data),
  failure:(data)=>Actions.auth_register_failure(data),
}

export const BOARD_UPLOAD_SAGA = {
  request:async (payload)=> await API.postUploadBoard(payload),
  pending:()=>Actions.board_upload_pending(),
  success:(data)=>Actions.board_upload_success(data),
  failure:(data)=>Actions.board_upload_failure(data),
}

export const BASE_GET_BOARD_MENU_SAGA = {
  request:async (payload)=> await API.postGetBoardMenu(payload),
  pending:()=>Actions.base_board_get_menu_pending(),
  success:(data)=>Actions.base_board_get_menu_success(data),
  failure:(data)=>Actions.base_board_get_menu_failure(data),
}

export const BOARD_GET_LIST_SAGA = {
  request:async (payload)=> await API.postGetBoardList(payload),
  pending:()=>Actions.base_board_get_menu_pending(),
  success:(data)=>Actions.board_get_list_success(data),
  failure:(data)=>Actions.board_get_list_failure(data),
}

export const BOARD_GET_LIST_SAGA = {
  request:async (payload)=> await API.postGetBoardList(payload),
  pending:()=>Actions.base_board_get_menu_pending(),
  success:(data)=>Actions.board_get_list_success(data),
  failure:(data)=>Actions.board_get_list_failure(data),
}



