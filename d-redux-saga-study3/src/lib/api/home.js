import axios from 'axios';
import {apiAddress} from 'config/settings';

export const getHomeResult =(num = 1) =>{
  const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
  return instance.get(`${apiAddress}/home`)
  .catch(err => {
    return {error:err}
  });
}