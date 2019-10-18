import { createAction } from 'redux-actions';

import * as api from 'lib/api'; 

// action type
export const WS_CONNECT = 'socket/WS_CONNECT';
export const WS_DISCONNECT = 'socket/WS_DISCONNECT';

export const SOCKET_CONNECT      = 'socket/SOCKET_CONNECT';
export const SOCKET_CONNECTING   = 'socket/SOCKET_CONNECTING';
export const SOCKET_CONNECTED    = 'socket/SOCKET_CONNECTED';
export const SOCKET_DISCONNECT   = 'socket/SOCKET_DISCONNECT';
export const SOCKET_DISCONNECTED = 'socket/SOCKET_DISCONNECTED';

export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMNET';
export const GET_POST = 'post/GET_POST';

// action
export const socketConnect      = createAction(SOCKET_CONNECT);
export const socketConnecting   = createAction(SOCKET_CONNECTING);
export const socketConnected    = createAction(SOCKET_CONNECTED);
export const socketDisconnect   = createAction(SOCKET_DISCONNECT)
export const socketDisconnected = createAction(SOCKET_DISCONNECTED);;

export const wsConnect    = createAction(WS_CONNECT);
export const wsDisConnect = createAction(WS_DISCONNECT);

export const getPostApi = createAction(GET_POST,api.getPost)
export const increment  = createAction(INCREMENT);
export const decrement  = createAction(DECREMENT);








