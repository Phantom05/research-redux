
import {api_address} from 'lib/setting';
import axios from 'axios';

const endPoint={
  post_signin:'/auth/login',
  post_signout:'/auth/logout',
  post_token:'/auth/token',
}
for(const keyName in endPoint){
  const value = endPoint[keyName];
  endPoint[keyName] = api_address + value
}

/**
 * 
 * @param {*} axiosConf 
 */
function Acx(axiosConf){
  return axios(axiosConf)
  .catch(err=>({error:err}))
}

/**
 * 
 * @param {*} payload 
 */
export function postSignin(payload){
  console.log(`api : post signin`,payload);
  const axiosConf={
    url:endPoint.post_signin,
    method:'post',
    data:payload
  }
  return Acx(axiosConf)
}

/**
 * 
 */
export function postSignOut(){
  console.log(`api : signout`);
  const axiosConf={
    url:endPoint.post_signout,
    method:'post',
  }
  return Acx(axiosConf)
}

/**
 * 
 * @param {*} payload 
 */
export function postToken(payload){
  // console.log('api post Token');
  const axiosConf={
    url:endPoint.post_token,
    method:'post',
    data:payload
  }
  return Acx(axiosConf)
}

export function getTest(payload){
  const axiosConf={
    url:`https://jsonplaceholder.typicode.com/todos/1`
  }
  return Acx(axiosConf)
}