import {
  handleActions,
  createAction
} from 'redux-actions';
import produce from 'immer';


export const WS_CONNECT     = 'socket/WS_CONNECT';
export const WS_DISCONNECT  = 'socket/WS_DISCONNECT';


export const SOCKET_CONNECT      = 'socket/SOCKET_CONNECT';
export const SOCKET_CONNECTING   = 'socket/SOCKET_CONNECTING';
export const SOCKET_CONNECTED    = 'socket/SOCKET_CONNECTED';
export const SOCKET_DISCONNECT   = 'socket/SOCKET_DISCONNECT';
export const SOCKET_DISCONNECTED = 'socket/SOCKET_DISCONNECTED';


export const wsConnect    = createAction(WS_CONNECT);
export const wsDisConnect = createAction(WS_DISCONNECT);

export const socketConnect      = createAction(SOCKET_CONNECT);
export const socketConnecting   = createAction(SOCKET_CONNECTING);
export const socketConnected    = createAction(SOCKET_CONNECTED);
export const socketDisconnect   = createAction(SOCKET_DISCONNECT)
export const socketDisconnected = createAction(SOCKET_DISCONNECTED);;

//  Reducer
let initialState = {
  connect: false,
  error: false,
  pending: false,
  message: '',
  send: ''
}

export default handleActions({
  [SOCKET_CONNECT]: (state, action) => {
    return produce(state, draft => {
      draft.connect = true;
    })
  }
}, initialState)
