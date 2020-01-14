
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

function Acx(axiosConf){
  return axios(axiosConf)
  .catch(err=>({error:err}))
}

export function postSignin(payload){
  console.log(`api : post signin`,payload);
  const axiosConf={
    url:endPoint.post_signin,
    method:'post',
    data:payload
  }
  return Acx(axiosConf)
}

export function postSignOut(){
  console.log(`api : signout`);
  const axiosConf={
    url:endPoint.post_signout,
    method:'post',
  }
  return Acx(axiosConf)
}

export function postToken(payload){
  const axiosConf={
    url:endPoint.post_token,
    method:'post',
    data:payload
  }
  return Acx(axiosConf)
}