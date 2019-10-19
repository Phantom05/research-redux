import { WindowActions } from 'store/actionCreators';
const data = require('lib/config/protocol.json');


const send = (store, {payload:valueOf},ws) => {
  console.log('sending a message');
  const [key,value] = Object.entries(valueOf)[0];

  if(value[0] === 0){
    console.log('only Notifies');
    ws.send(JSON.stringify(valueOf));

    if(valueOf === data.window_title){
      WindowActions.subTitle('REDUX WEBSOCKET !');
    }
    if(valueOf === data.window_minimize){
      WindowActions.title('minimize');
    }
    if(valueOf === data.window_maxmize){
      WindowActions.title('maxmize');
    }
    // if(valueOf === data.window_exit){
    //   WindowActions.title('exit');
    // }
  }else if (value[0] === 1){
    console.log('blocking');

  }
}
export default send