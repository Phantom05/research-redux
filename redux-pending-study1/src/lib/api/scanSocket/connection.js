


import { socketConnect } from 'store/modules/websocket';
import {QWebchannel} from 'qwebchannel';
import {mode_development,mode_production} from 'lib/config/settings'


const connection = ({getState,dispatch},event) =>{
  console.log(`websocket open`, event.target.url);
  dispatch(socketConnect());
  if(mode_development){ 
    // App(ws)  
  }else if(mode_production){  
    // new QWebChannel(ws, App); 
  }
}
export default connection