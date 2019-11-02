
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


// login
export function postLogin(data) {
  const dataConfig= {
    email:data.email,
    password:data.password
  }
  return postAxios('/auth/login', dataConfig)
}

export function postLogout(data) {
  return getAxios('/auth/logout')
}

export function postToken(token) {
  console.log('api post');
  const dataConfig= { token };
  return postAxios('/auth/token', dataConfig)
}
//NOTE: token으로 들어왔을떄 reducer 업데이트해줘야함.
// 로그아웃 작업 해줘야함.
// PrivateRoute 만들기
// 그리고 login인 되었을시 자동으로 페이지 던지는 작업 해야함.


// signup
export function postRegister(data){
  console.log('api register');
  console.log(data);
  return postAxios('/auth/signup',data)
}




