

import { wsSend } from 'store/modules/websocket';
 
const bridge = ({getState,dispatch},event) =>{
  console.log('bridge');
  dispatch(wsSend({'hello':'world'}))
  
}
export default bridge