


const receive = (event) =>{
  const {data} = event;
  console.log(event);
  console.log(data,'datadata');
  const payload = JSON.parse(data);
  console.log('reciving server message');

}
export default receive