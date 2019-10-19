import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';

export const PAGE = 'window/PAGE';

export const page = createAction(PAGE);

let initialState ={
  page:'/'
}
export default handleActions({
  [PAGE]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      
    })
  }
},initialState )