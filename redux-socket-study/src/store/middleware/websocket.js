import * as websocketActions from 'store/modules/websocket';
import {message,send} from 'lib/api/websocket';

const socketMiddleware = () => {
  let socket = null;

  const onOpen = store => (event) => {
    console.log('websocket open', event.target.url);
    store.dispatch(websocketActions.ws_connected(event.target.url)
    )
  };
  const onClose = store => () => {
    console.log('websocket disconnect');
    store.dispatch(websocketActions.ws_disconnected());
  };

  const onMessage = store => (event) => {
    message(store,event)
  };

  // the middleware part of this function
  return store => next => action => {
    switch (action.type) {
      case websocketActions.WS_CONNECT:
        if (socket !== null) socket.close();
        socket = new WebSocket(action.payload);
        socket.onmessage = onMessage(store);
        socket.onclose = onClose(store);
        socket.onopen = onOpen(store);
        break;
      case websocketActions.WS_DISCONNECT:
        if (socket !== null) socket.close();
        socket = null;
        console.log('Websocket Closed');
        break;
      case websocketActions.WS_SEND:
        send(store,action)
        break;
      default:
        console.log('the next action:', action);
        return next(action);
    }
  };
};

export default socketMiddleware();