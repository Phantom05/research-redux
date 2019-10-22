import { createAction } from 'redux-actions';
import * as API from 'lib/api';

// acitons
// home
export const HOME_GET_USER = 'HOME_GET_USER';
export const home_get_user =  createAction(HOME_GET_USER);

export const HOME_GET_USER_FAILURE = 'HOME_GET_USER_FAILURE';
export const home_get_user_failure =  createAction(HOME_GET_USER_FAILURE);
//counter
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const counter_increment = createAction(COUNTER_INCREMENT);

export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const counter_decrement = createAction(COUNTER_DECREMENT);


// sagas
export const SAGA_GET_USER = 'SAGA_GET_USER';
export const saga_get_user =  createAction(SAGA_GET_USER);

export const saga_get_user_wapper={
  request:(userId)=>API.getUser(userId),
  success:(data)=> home_get_user(data),
  failure:() => home_get_user_failure()
}



// socket

export const WS_CONNECT      = 'socket/WS_CONNECT';
export const WS_CONNECTING   = 'socket/WS_CONNECTING';
export const WS_CONNECTED    = 'socket/WS_CONNECTED';
export const WS_DISCONNECT   = 'socket/WS_DISCONNECT';
export const WS_DISCONNECTED = 'socket/WS_DISCONNECTED';
export const WS_SEND         = 'socket/WS_SEND';
 
export const ws_connect      = createAction(WS_CONNECT);
export const ws_connecting   = createAction(WS_CONNECTING);
export const ws_connected    = createAction(WS_CONNECTED);
export const ws_disconnect   = createAction(WS_DISCONNECT);
export const ws_disconnected = createAction(WS_DISCONNECTED);
export const ws_send         = createAction(WS_SEND);
