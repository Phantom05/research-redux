import * as websocketActions from 'store/modules/websocket';
import { message, send } from 'lib/api/websocket';
import { QWebChannel } from 'qwebchannel';
import { modeProd } from 'lib/config/settings';


const socketMiddleware = () => {
  let socket = null, ws = null;
  const onOpen = store => (event) => {
    console.log('>>> websocket open', event.target.url);
    store.dispatch(websocketActions.ws_connected(event.target.url));
    if(modeProd)  ws = new QWebChannel(socket,message(store,event));
  };
  const onClose = store => () => {
    console.log('>>> websocket disconnect');
    store.dispatch(websocketActions.ws_disconnected());
  };
  // productuon에서는 안쓰임.
  const onMessage = store => (event) => message(store, event)

  // the middleware part of this function
  return store => next => action => {
    console.log('>>> ***** middleware');
    //block하는순간 send함수로 들어가지 못함. 
    let isSocketBlock = store.getState().websocket.disable
    if(isSocketBlock) return next(action);
  
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
        // 보낼떄만 socket이 있으면 됨, 받을떈, 상태만 변경해주면됨.
        // 받을 값을  reducer로 변경해주고 reducer에 따라서 엘리먼트가 send하게만 하면됨.
        send(store, action,socket)
        break;
      default:
        // console.log('the next action:', action);
        return next(action);
    }
  };
};


export default socketMiddleware();