
// import {createAction,handleActions} from 'redux-actions';
// import produce from 'immer';



import {
  WS_CONNECT,
  WS_DISCONNECT,
  // SOCKET_CONNECT,
  // SOCKET_DISCONNECT,
  socketDisconnect,
  socketConnect
} from 'store/actions';

// Middleware

export const socketMiddleware  = () =>{
  let socket = null;

  const onOpen = store => (event) =>{
    console.log(`websocket open`, event.target.url);
    console.log(socketConnect);
    store.dispatch(socketConnect())
  }

  const onClose = store =>() =>{
    store.dispatch(socketDisconnect())
  }

  const onMessage =store => (event) =>{
    const payload = JSON.parse(event.data);
    console.log('reciving server message',payload);
  }

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