import * as actions from 'store/actions';
import { message, send } from './index';
import { QWebChannel } from 'qwebchannel';
import { settings } from 'config';
const socketMiddleware = () => {
  console.log('>>> socketMiddleware');
  let socket = null, ws = null;
  const onOpen = store => (event) => {
    console.log('websocket open', event.target.url);
    store.dispatch(actions.ws_connected(event.target.url));
    if(settings.ProdMode)  ws = new QWebChannel(socket,message(store,event));
  };
  const onClose = store => () => {
    console.log('websocket disconnect');
    store.dispatch(actions.ws_disconnected());
  };
  // productuon에서는 안쓰임.
  const onMessage = store => (event) => message(store, event)

  // the middleware part of this function
  return store => next => action => {
    switch (action.type) {
      case actions.WS_CONNECT:
        console.log('connect in');
        if (socket !== null) socket.close();
        socket = new WebSocket(settings.socketAddress);
        socket.onmessage = onMessage(store);
        socket.onclose = onClose(store);
        socket.onopen = onOpen(store);
        break;
      case actions.WS_DISCONNECT:
        if (socket !== null) socket.close();
        socket = null;
        console.log('Websocket Closed');
        break;
      case actions.WS_SEND:
        // 보낼떄만 socket이 있으면 됨, 받을떈, 상태만 변경해주면됨.
        // 받을 값을  reducer로 변경해주고 reducer에 따라서 엘리먼트가 send하게만 하면됨.
        send(store, action,socket)
        break;
      default:
        console.log('the next action:', action);
        return next(action);
    }
  };
};


export default socketMiddleware();