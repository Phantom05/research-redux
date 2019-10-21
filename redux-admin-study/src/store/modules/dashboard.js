import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';

export const TITLE = 'dashboard/TITLE';

export const title = createAction(TITLE);

let initialState ={
  title:"dashboard"
}
export default handleActions({
  [TITLE]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('hello dashboard title');

    })
  }
},initialState )