import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

export const GET_HOME = 'home/GET_HOME';
export const SAGA_GET_HOME = 'home/SAGA_GET_HOME';

export const get_home =createAction(GET_HOME);
export const saga_get_home = createAction(SAGA_GET_HOME);

let initialState={
  data:null
}
export default handleActions({
  [GET_HOME]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('in');
      draft.data = diff;
    })
  }
},initialState)