import { WindowActions,SocketActions } from 'store/actionCreators';


const data = require('lib/config/protocol.json');
const send = (store, {payload:valueOf},ws) => {
  console.log('>>> sending a message',valueOf);
  //무조건 보내고 상태에 따라 블락할건지, 풀건지
  ws.send(JSON.stringify(valueOf));
  const value = Object.values(valueOf)[0];

  if(value[0] === 0){
    console.log('>>> only Notifies');
    
    if(valueOf === data.window_title){
      WindowActions.subTitle('REDUX WEBSOCKET !');
    }
    if(valueOf === data.window_minimize){
      WindowActions.title('minimize');
    }
    if(valueOf === data.window_maxmize){
      WindowActions.title('maxmize');
    }

  }else if (value[0] === 1){
    console.log('>>> socket Blocking');

    if(valueOf === data.window_exit){

    }

    SocketActions.ws_block();
  }
}
export default send