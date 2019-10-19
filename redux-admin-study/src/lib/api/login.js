
import axios from 'axios';
import {apiAddress} from 'lib/config/settings';


export function getAxios(api){
  return axios.get(apiAddress + api)
}
export function postAxios(api,data = {}){
  return axios.post(apiAddress + api,data)
}
export function Axios(api){
  return axios.post(apiAddress + api)
}

export function postLogin(data){
  return postAxios('/auth/login',data)
}