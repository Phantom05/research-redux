import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import {
  api_address, 
  // ENV_MODE_DEV
} from 'lib/setting';

const http = axios.create({
  baseURL: api_address,
  timeout: 5000,
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, { enabledByDefault: false })
});
const Acx = (axiosConf) => http(axiosConf).catch(err=>({error:err}));
const limit = (count, page) => `limit=${count}&offset=${page ? page * count : 0}`

/**
 * 
 * @param {*} payload object
 */
export const Test={
  getTest:(payload)=>{
    console.log(`api : post getTest`);
    const axiosConf={
      url:`/articles?${limit(10, payload)}`,
      method:'get',
      data:payload
    }
    return Acx(axiosConf);
  },
} 
