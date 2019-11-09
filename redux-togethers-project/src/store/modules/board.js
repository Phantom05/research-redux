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
  },
  page:{

  },
  boardList:[],
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
  [actions.BOARD_UPLOAD_SUCCESS]:(state,{payload:diff})=>{
    console.log('BOARD_UPLOAD_SUCCESS');
    return produce(state,draft=>{
      const {boardUpload} = draft;
      boardUpload.pending = false;
      boardUpload.success = true;
      boardUpload.failure = false;
    })
  },
  [actions.BOARD_UPLOAD_FAILURE]:(state,{payload:diff})=>{
    console.log('BOARD_UPLOAD_FAILURE');
    return produce(state,draft=>{
      const {boardUpload} = draft;
      boardUpload.pending = false;
      boardUpload.success = false;
      boardUpload.failure = true;
    })
  },

  [actions.BOARD_GET_LIST_PENDING]:(state,{payload:diff})=>{
    console.log('BOARD_GET_LIST_PENDING');
    return produce(state,draft=>{

    })
  },
  [actions.BOARD_GET_LIST_SUCCESS]:(state,{payload:diff})=>{
    console.log('BOARD_GET_LIST_SUCCESS');
    return produce(state,draft=>{

    })
  },
  [actions.BOARD_GET_LIST_FAILURE]:(state,{payload:diff})=>{
    console.log('BOARD_GEBOARD_GET_LIST_FAILURET_LIST_PENDING');
    return produce(state,draft=>{

    })
  },

},initialState)




