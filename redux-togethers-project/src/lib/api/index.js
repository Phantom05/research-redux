
import axios from 'axios';
import {apiAddress} from 'lib/config/settings';
import {cookie,keys} from 'utils';

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


// login
export function postLogin(data) {
  const dataConfig= {
    email:data.email,
    password:data.password
  }
  return postAxios('/auth/login', dataConfig)
}

// logout
export function postLogout(data) {
  return getAxios('/auth/logout')
}

// token get login infomation
export function postToken(token) {
  console.log('api post');
  const dataConfig= { token };
  return postAxios('/auth/token', dataConfig)
}

// signup
export function postRegister(data){
  console.log('api register');
  return postAxios('/auth/signup',data)
}


// board
export function postUploadBoard(data){
  console.log('postUploadBoard');
  console.log(data,'datadatadata');
  const {
    apiUrl,
    author,
    authorSeq,
    title,
    editor:body,
    privateValue:privacy
  } = data;
  const dataConfig ={
    author,authorSeq,title,body,privacy
  }

  return postAxios(`/board${apiUrl}/upload`,dataConfig)
}


export function postGetBoardList(data){
  console.log(`postGetBoardList`);
  const dataConfig ={};
  // return postAxios(`/board${apiUrl}/upload`,dataConfig)
}


//NOTE: token으로 들어왔을떄 reducer 업데이트해줘야함.
// 로그아웃 작업 해줘야함.
// PrivateRoute 만들기
// 그리고 login인 되었을시 자동으로 페이지 던지는 작업 해야함.