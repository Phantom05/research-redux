
import { socketDisconnect } from 'store/modules/websocket';

const close = (store, event) =>{
  console.log('socket close');
  store.dispatch(socketDisconnect())
}
export default close