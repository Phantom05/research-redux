import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';

export const TEST = 'login/TEST';

export const test = createAction(TEST);

let initialState ={
  test:0
}
export default handleActions({
  [TEST]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      
    })
  }
},initialState )