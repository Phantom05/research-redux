
import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMNET';


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
},initialState)