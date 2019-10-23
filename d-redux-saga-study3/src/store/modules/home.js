import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';

let initialState ={
  data:null
}

export default handleActions({
  [actions.HOME_GET_RESULT]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      diff =JSON.stringify(diff)
      draft.data = diff;
    })
  }
},initialState)