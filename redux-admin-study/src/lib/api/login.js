
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
//NOTE: token으로 들어왔을떄 reducer 업데이트해줘야함.
// 로그아웃 작업 해줘야함.
// PrivateRoute 만들기
// 그리고 login인 되었을시 자동으로 페이지 던지는 작업 해야함.