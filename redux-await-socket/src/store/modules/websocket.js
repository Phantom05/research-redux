import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';


export const WS_CONNECT      = 'socket/WS_CONNECT'
export const WS_CONNECTING   = 'socket/WS_CONNECTING'
export const WS_CONNECTED    = 'socket/WS_CONNECTED'
export const WS_DISCONNECT   = 'socket/WS_DISCONNECT'
export const WS_DISCONNECTED = 'socket/WS_DISCONNECTED'
export const WS_SEND         = 'socket/WS_SEND';
export const WS_BLOCK        = 'socket/WS_BLOCK';
export const WS_UNBLOCK      = 'socket/WS_UNBLOCK';
 
export const ws_connect      = createAction(WS_CONNECT);
export const ws_connecting   = createAction(WS_CONNECTING);
export const ws_connected    = createAction(WS_CONNECTED);
export const ws_disconnect   = createAction(WS_DISCONNECT);
export const ws_disconnected = createAction(WS_DISCONNECTED);
export const ws_send         = createAction(WS_SEND);
export const ws_block        = createAction(WS_BLOCK);
export const ws_unblock      = createAction(WS_UNBLOCK);



let initialState={
  connect:false,
  host:null,
  disable:false
}
export default handleActions({
  [WS_CONNECTED]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      // console.log(diff);
      draft.host = diff;
      draft.connect = true;
    })
  },
  [WS_DISCONNECTED]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.connect = false;
    })
  },
  [WS_BLOCK]:(state,{payload:diff})=>{
    console.log('socket ws_block!');
    return produce(state,draft=>{
      draft.disable = true;
    })
  },
  [WS_UNBLOCK]:(state,{payload:diff})=>{
    console.log('socket unblock');
    return produce(state,draft=>{
      draft.disable = false;
    })
  }
},initialState);



// SocketActions.ws_connect()
// SocketActions.ws_disconnect()