import { handleActions } from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';

let initialState ={
  number:1
}
export default handleActions({
  [actions.COUNTER_INCREMENT]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.number++;
    })
  },
  [actions.COUNTER_DECREMENT]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.number--;
    })
  },
},initialState)