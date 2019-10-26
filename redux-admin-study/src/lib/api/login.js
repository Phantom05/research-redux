
import axios from 'axios';
import { apiAddress } from 'lib/config/settings';


export const getAxios = (api) =>
  axios.get(apiAddress + api)
    .catch(err => { return { error: err } });

export const postAxios = (api, data = {}) =>{
  const config={
    url:apiAddress+api,
    method:'post',
    data
  }
  return axios(config)
  .catch(err => { return { error: err } });
}


export function postLogin(data) {
  console.log(data);
  const dataConfig= {
    email:data.email,
    password:data.password
  }
  return postAxios('/auth/login', dataConfig)
}

export function postLogout(data) {
  const dataConfig= {
    email:data.email,
    password:data.password
  }
  return postAxios('/auth/login', dataConfig)
}


export function postToken(token) {
  const dataConfig= { token };
  console.log(dataConfig);
  return postAxios('/auth/token', dataConfig)
}
