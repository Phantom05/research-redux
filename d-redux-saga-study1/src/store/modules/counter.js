import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';



export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
export const INCREMENT_ASYNC = 'counter/INCREMENT_ASYNC';
export const DECREMENT_ASYNC = 'counter/DECREMENT_ASYNC'

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export const asyncIncrement = createAction(INCREMENT_ASYNC);
export const asyncDecrement = createAction(DECREMENT_ASYNC);


let initialState = {
  number:1,
}


export default handleActions({
  [INCREMENT]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.number++;
    })
  },
  [DECREMENT]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.number--;
    })
  }
},initialState)