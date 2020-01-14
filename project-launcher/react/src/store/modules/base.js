import {handleActions} from 'redux-actions';
import * as actions from 'store/actions';
import produce from 'immer';

let initialState={
  landing:true,
  error:{
    loading:false,
    message:null
  },
 
}

export default handleActions({
  [actions.BASE_EXIT_LANDING]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.landing = false;
    })
  },
  [actions.BASE_ENTER_LANDING]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.landing = true;
    })
  } 
  
},initialState)

