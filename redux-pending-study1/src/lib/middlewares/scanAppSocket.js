
import {
  WS_CONNECT,
  WS_DISCONNECT,
  WS_SEND,
  WS_RECEIVE,
  socketDisconnect,
  socketConnect,
  wsReceive,
  wsDisConnect
} from 'store/modules/websocket';
import {receive,connection,close,send} from 'lib/api/scanSocket';


// Middleware
export const socketMiddleware  = () =>{
  let ws = null;
  const onOpen = (store) => (event) =>{
    connection(store,ws,event);
  }
  const onMessage =(store) => (event) =>{
    const {data} = event;
    store.dispatch(wsReceive(event))
  }
  const onClose = (store) =>() =>store.dispatch(wsDisConnect());

  return (store) => next => action => {
    switch (action.type) {
      case WS_CONNECT:
        if (ws !== null) { ws.close(); }
        ws = new WebSocket(action.payload);
        ws.onmessage = onMessage(store);
        ws.onclose = onClose(store);
        ws.onopen = onOpen(store);
        break;
      case WS_DISCONNECT:
        close(ws);
        break;
      case WS_SEND:
        send(ws)
        break;
      case WS_RECEIVE:
        receive(action.payload);
        break;
      case 'NEW_MESSAGE':
        console.log('sending a message', action.msg);
        ws.send(JSON.stringify({ command: 'NEW_MESSAGE', message: action.msg }));
        break;
      default:
        console.log('the next action:', action);
        return next(action);
    }
  };
};