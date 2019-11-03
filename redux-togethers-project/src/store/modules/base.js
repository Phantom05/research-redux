import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';
// import {cookie,keys} from 'utils'


let initialState ={
  landing:true,
  board:{
    menuList:null
  },
  url:''
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

  [actions.BASE_BOARD_GET_MENU_PENDING]:(state,{payload:diff})=>{
    console.log('BASE_BOARD_GET_MENU_PENDING');
    return produce(state,draft=>{

    })
  },
  [actions.BASE_BOARD_GET_MENU_SUCCESS]:(state,{payload:diff})=>{
    console.log('BASE_BOARD_GET_MENU_SUCCESS');
    return produce(state,draft=>{
      console.log(diff);
      const {boardMenuList} = diff;
      draft.board.menuList = boardMenuList;
    })
  },
  [actions.BASE_BOARD_GET_MENU_FAILURE]:(state,{payload:diff})=>{
    console.log('BASE_BOARD_GET_MENU_FAILURE');
    return produce(state,draft=>{

    })
  },
},initialState)



