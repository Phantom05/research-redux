import axios from 'axios';


export function getUser(userId){
  return axios.get(`http://jsonplaceholder.typicode.com/users?id=${userId}`)
}