import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import API from 'lib/api/users';

export const REQUEST_USER = 'users/REQUEST_USER';
export const SUCCESS_USER = 'users/SUCCESS_USER';
export const FAILURE_USER = 'users/FAILURE_USER';
export const GET_USER     = 'users/GET_USER';
export const GET_POST     = 'users/GET_POST';

export const successUser  = createAction(SUCCESS_USER);
export const failureUser  = createAction(FAILURE_USER);
export const request_user = createAction(REQUEST_USER);
export const get_user     = createAction(GET_USER);
export const get_post     = createAction(GET_POST);

export const getUser = {
  request:(payload) => API.getUsers(payload),
  success:(data) =>successUser(data),
  failure:() => failureUser()
}

export const getPost = {
  request:(payload) => API.getPost(payload),
  success:(data) =>successUser(data),
  failure:() => failureUser()
}

let initialState = {
  error:false,
  data:null,
}

export default handleActions({
  [SUCCESS_USER]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('success');
      console.log(diff);
      draft.error = false;
      draft.data = JSON.stringify(diff);
    })
  },
  [FAILURE_USER]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('failuer');
      draft.error = true;
    })
  },

},initialState)