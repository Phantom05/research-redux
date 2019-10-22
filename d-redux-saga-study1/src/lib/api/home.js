
import axios from 'axios';
const apiAddress = 'http://localhost:9999';

export function getHome(payload){
  console.log(payload,'payload');
 return axios.get(`${apiAddress}`)
}