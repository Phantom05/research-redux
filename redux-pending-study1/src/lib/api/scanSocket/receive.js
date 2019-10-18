


const receive = (store, event) =>{
  const payload = JSON.parse(event.data);
  console.log('reciving server message',payload);
}
export default receive