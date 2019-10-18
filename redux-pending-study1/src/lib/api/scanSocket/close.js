
// import { socketDisconnect } from 'store/modules/websocket';
// 소켓이 종료가 된 후에 뭔가 할수도 있음. 위에를 이용해서
const close = (ws) =>{
  console.log('socket close');
  if (ws !== null) { ws.close(); }
  ws = null;
  console.log('websocket closed');
  // store.dispatch(socketDisconnect())
}
export default close