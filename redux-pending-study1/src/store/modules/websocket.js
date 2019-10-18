import {
  handleActions
} from 'redux-actions';
import produce from 'immer';
import {
  // WS_CONNECT,
  // WS_DISCONNECT,
  SOCKET_CONNECT,
  // SOCKET_CONNECTING,
  // SOCKET_CONNECTED,
  // SOCKET_DISCONNECT,
  // SOCKET_DISCONNECTED,
  // socketConnect,
  // socketConnecting,
  // socketConnected,
  // socketDisconnect,
  // socketDisconnected,
} from 'store/actions';


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
    console.log('what the');
    return produce(state, draft => {
      draft.connect = true;
    })
  }
}, initialState)
