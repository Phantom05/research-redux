
import axios from 'axios';
import {apiAddress} from 'lib/config/settings';

// common  
export const getAxios = (api) =>{
  return axios.get(apiAddress + api)
  .catch(err => { return { error: err } });
}
export const postAxios = (api, data = {}) =>{
  const config={
    url:apiAddress+api,
    method:'post',
    data
  }
  return axios(config)
  .catch(err => { return { error: err } });
}


// base
export function postGetBoardMenu(data){
  const dataConfig={
    category:data
  }
  return postAxios('/board/menu/list',dataConfig)
}

export function getRecentsPosts(data){
  console.log(data);
  // postAxios('/board/menu/list',dataConfig)
}