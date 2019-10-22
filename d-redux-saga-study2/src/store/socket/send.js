
const send = (store, {payload:valueOf},ws) => {
  console.log('sending a message');
  const [key,value] = Object.entries(valueOf)[0];

  if(value[0] === 0){
    console.log('only Notifies');
    ws.send(JSON.stringify(valueOf));

  }else if (value[0] === 1){
    console.log('blocking');

  }
}
export default send