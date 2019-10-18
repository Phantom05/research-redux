
import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import {pender} from 'redux-pender';
import * as api from 'lib/api'; 
// import {
//   INCREMENT,
//   DECREMENT,
//   GET_POST
// } from 'store/actions';


export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMNET';
export const GET_POST  = 'post/GET_POST';

export const getPostApi = createAction(GET_POST,api.getPost)
export const increment  = createAction(INCREMENT);
export const decrement  = createAction(DECREMENT);


let initialState = {
  number:0,
  pending:false,
  error:false,
  post:{
    title:'',
    body:''
  }
}

export default handleActions({
  [INCREMENT]:(state,{payload:diff})=>{
    return produce(state,draft => {
      draft.number++;
    })
  },
  [DECREMENT]:(state,{payload:diff})=>{
    return produce(state,draft => {
      draft.number--;
    })
  },
  ...pender({
    type:GET_POST,
    onPending:(state,{payload:response})=>{
      return produce(state,draft=>{
        draft.pending = true;
        draft.error = false;
      })
    },
    onSuccess:(state,{payload:response})=>{
      const {data:{title, body}} = response;
      return produce(state,draft=>{
        draft.pending=false;
        draft.error=false;
        draft.post = {title,body}
      })
    }
  })
},initialState)