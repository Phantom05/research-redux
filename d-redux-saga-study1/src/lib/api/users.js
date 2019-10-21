import axios from 'axios';
const apiAddress = 'http://localhost:9999';
const API = {};

function Axios(config){
  config.url = apiAddress+config.url;
  return axios(config)
}
function getServerResult(){
  const config ={
    url:'/',
    method:'get'
  }
  return Axios(config).then((response)=>{
    if(response.status !== 200) throw new Error;
    return response 
  })
}

function getUsers(payload){
  console.log(payload,'>>> payload in API func getUsers arguments');
  const config ={
    url:'http://jsonplaceholder.typicode.com/users',
    method:'get'
  }
  return axios(config).then((response)=>{
    if(response.status !== 200) throw new Error;
    console.log(response);
    return response 
  })
}
function getPost(postId){
  console.log(postId);
  const config={
    url:`http://jsonplaceholder.typicode.com/posts?userId=${postId}`,
    method:'get'
  }
  return axios(config).then((response)=>{
    if(response.status !== 200) throw new Error;
    return response 
  })
}


/**
 *   getUser().then((response)=>{
      const {data} = response;
      console.log(data);
    })
 */

 API.getUsers        = getUsers;
 API.getPost         = getPost;
 API.getServerResult = getServerResult;

 export default API;