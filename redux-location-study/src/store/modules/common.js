
import {handleActions} from 'redux-actions';
// import * as actions from 'store/actions';
// import produce from 'immer';

let initialState={
  modal:true,

};
export default handleActions({
  // [actions.BASE_EXIT_LANDING]:(state,{payload:diff})=>{
  //   return produce(state,draft=>{
  //     console.log('BASE_EXIT_LANDING');
  //     draft.landing = false;
  //   })
  // },
  // [actions.BASE_ENTER_LANDING]:(state,{payload:diff})=>{
  //   return produce(state,draft=>{
  //     console.log('BASE_ENTER_LANDING');
  //     draft.landing = true;
  //   })
  // },
  
},initialState)

