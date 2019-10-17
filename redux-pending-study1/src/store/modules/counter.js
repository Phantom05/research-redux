
import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import {pender} from 'redux-pender';
import * as api from 'lib/api'; 

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMNET';

const GET_POST = 'post/GET_POST';


export const getPostApi = createAction(GET_POST,api.getPost)
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

let initialState = {
  number:0
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
    onSuccess:(state,{payload:response})=>{
      const {data} = response;
      return produce(state,draft=>{
        console.log(data,'datadata');
        // console.log();
      })
    }
  })
},initialState)