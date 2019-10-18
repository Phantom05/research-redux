

import { socketConnect } from 'store/modules/websocket';
import { wsSend } from 'store/modules/websocket';
 
const bridge = (store,ws,event) =>{
  console.log('bridge');
  store.dispatch(socketConnect());
  // store.dispatch(wsSend({'hello':'world'}))
  
}
export default bridge