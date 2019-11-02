import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';
// import {cookie,keys} from 'utils'


let initialState ={
  landing:true,
}


export default handleActions({
  [actions.BASE_LANDING_VIEW]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('BASE_LANDING_VIEW');
      draft.landing = diff;
    })
  },
  [actions.AUTH_TOKEN_SUCCESS]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('AUTH_TOKEN_SUCCESS');
      draft.landing = false;
    })
  },
},initialState)