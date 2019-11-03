import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';
// import {cookie,keys} from 'utils'


let initialState ={
  mainTitle:null,
  subTitle:null,
  isWriteMode:false,
}


export default handleActions({
  [actions.BOARD_VIEW_MODE_CHANGE]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('BOARD_VIEW_MODE_CHANGE');
      if(diff === 'write'){
        draft.isWriteMode = true
      }else if (diff === 'view'){
        draft.isWriteMode = false
      }
    })
  },

},initialState)