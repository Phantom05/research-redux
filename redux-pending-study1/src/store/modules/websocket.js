
import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';

// Middleware
const WS_CONNECT = 'socket/WS_CONNECT';
const WS_DISCONNECT = 'socket/WS_DISCONNECT';
export const wsConnect =createAction(WS_CONNECT);
export const wsDisConnect =createAction(WS_DISCONNECT);

export const socketMiddleware  = () =>{
  let socket = null;

  const onOpen = store => (event) =>{
    console.log(`websocket open`, event.target.url);
    console.log(event,'event');
    console.log(store,'eventevent');
    store.dispatch({type:SOCKET_CONNECT})
  }

  const onClose = store =>() =>{
    // store.dispatch(socketActions.wsDisconnected())
  }

  const onMessage =store => (event) =>{
    const payload = JSON.parse(event.data);
    console.log('reciving server message');
    console.log(payload);
  }

  return (store) => next => action => {
    switch (action.type) {
      case WS_CONNECT:
        if (socket !== null) {
          socket.close();
        }
        console.log(action);
        socket = new WebSocket(action.payload);
        socket.onmessage = onMessage(store);
        socket.onclose = onClose(store);
        socket.onopen = onOpen(store);

        break;
      case WS_DISCONNECT:
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        console.log('websocket closed');
        break;
      case 'NEW_MESSAGE':
        console.log('sending a message', action.msg);
        socket.send(JSON.stringify({ command: 'NEW_MESSAGE', message: action.msg }));
        break;
      default:
        console.log('the next action:', action);
        return next(action);
    }
  };
};


const SOCKET_CONNECT = 'socket/SOCKET_CONNECT';
const SOCKET_CONNECTING = 'socket/SOCKET_CONNECTING';
const SOCKET_CONNECTED = 'socket/SOCKET_CONNECTED';
const SOCKET_DISCONNECT = 'socket/SOCKET_DISCONNECT';
const SOCKET_DISCONNECTED = 'socket/SOCKET_DISCONNECTED';

export const socketConnect = createAction(SOCKET_CONNECT);
export const socketConnecting = createAction(SOCKET_CONNECTING) ;
export const socketConnected = createAction(SOCKET_CONNECTED) ;
export const socketDisconnect = createAction(SOCKET_DISCONNECT) 
export const socketDisconnected = createAction(SOCKET_DISCONNECTED); ;




//  Reducer
let initialState = {
  connect:false,
  error:false,
  pending:false,
  message:'',
  send:''
}


export default handleActions({
  [SOCKET_CONNECT]:(state,action)=>{
    return produce(state,draft=>{
      draft.connect = true;
    })
  }
},initialState)

