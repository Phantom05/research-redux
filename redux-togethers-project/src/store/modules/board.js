import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';
// import {cookie,keys} from 'utils'


let initialState ={
  mainTitle:null,
  subTitle:null
}


export default handleActions({
  [actions.BASE_LANDING_VIEW]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('BASE_LANDING_VIEW');
      draft.landing = diff;
    })
  },

},initialState)