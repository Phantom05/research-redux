
import {
  WS_CONNECT,
  WS_DISCONNECT,
  WS_SEND,
  WS_RECEIVE,
  socketDisconnect,
  socketConnect
} from 'store/modules/websocket';
import {receive,connection,close} from 'lib/api/scanSocket';


// Middleware
export const socketMiddleware  = () =>{
  let socket = null;
  const onOpen = store => (event) =>connection(store,event);
  const onMessage =store => (event) =>receive(store, event);
  const onClose = store =>() =>close(store);

  return (store) => next => action => {
    switch (action.type) {
      case WS_CONNECT:
        if (socket !== null) {
          socket.close();
        }
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
      case WS_SEND:
        console.log('send');

          break;
      case WS_RECEIVE:

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