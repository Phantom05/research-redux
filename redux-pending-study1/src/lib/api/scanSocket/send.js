
import { wsSend } from 'store/modules/websocket';

const send = (ws) =>{
  console.log('in send');
  ws.send(JSON.stringify({key:'test'}))
  // wsSend()
}
export default send