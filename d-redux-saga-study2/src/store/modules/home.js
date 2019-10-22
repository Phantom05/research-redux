import { handleActions } from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';


let initialState ={
  error:false,
  data:null,
}
export default handleActions({
  [actions.HOME_GET_USER]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('ff');
      diff = JSON.stringify(diff);
      console.log(diff);
      draft.data = diff;
    })
  },
  [actions.HOME_GET_USER_FAILURE]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.error= true;
      draft.data = null;
    })
  }
},initialState)