

import { SocketActions,WindowActions } from 'store/actionCreators';

const data = require('lib/config/protocol.json');
const clientKey = (data) => Object.keys(data)[0];
const message = (store,event) =>{
  const message = JSON.parse(event.data);
  let server_key = Object.keys(message)[0];
  let server_value = Object.values(message)[0];
  console.log('>>> receiving server message \n*',server_key,server_value);

  if(server_value[0] === 1){
    SocketActions.ws_unblock();
  }

  if(server_key === clientKey(data.server_connect)){
    console.log('>>> Connect Complete, ScanApp Ready!');
  }
  if(server_key === clientKey(data.window_title)){
    console.log('>>> unblock!');
    
  }

  if(server_key === 'KOF_1000'){
    console.log('>>> func!! page!');
    WindowActions.page('setting');
    
  }



  return () =>{
    // QT들이 들어옴./
  }
}
export default message