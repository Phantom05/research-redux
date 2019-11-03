import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';
// import {cookie,keys} from 'utils'


let initialState ={
  mainTitle:null,
  subTitle:null,
  isWriteMode:false,
  boardUpload:{
    pending:false,
    success:false,
    failure:false,
  }
}


export default handleActions({
  [actions.BOARD_VIEW_MODE_CHANGE]:(state,{payload:diff})=>{
    console.log('BOARD_VIEW_MODE_CHANGE');
    return produce(state,draft=>{
      if(diff === 'write'){
        draft.isWriteMode = true
      }else if (diff === 'view'){
        draft.isWriteMode = false
      }
    })
  },
  [actions.BOARD_UPLOAD_PENDING]:(state,{payload:diff})=>{
    console.log('BOARD_UPLOAD_PENDING');
    return produce(state,draft=>{
      const {boardUpload} = draft;
      boardUpload.pending = true;
      boardUpload.success = false;
      boardUpload.failure = false;
    })
  },

},initialState)


