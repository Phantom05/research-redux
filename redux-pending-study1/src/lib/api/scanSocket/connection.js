



import {mode_development,mode_production} from 'lib/config/settings';
import { QWebChannel } from 'qwebchannel';
import bridge from './bridge';

const connection = (store,ws,event) =>{
  console.log(`Websocket open url:`, event.target.url);
  if(mode_development){ 
    bridge(store,ws,event)
  }else if(mode_production){  
    new QWebChannel(ws, bridge); 
  }
}
export default connection