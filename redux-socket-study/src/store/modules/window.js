import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';


export const TITLE = 'window/TITLE';
export const title = createAction(TITLE);

export const SUB_TITLE = 'window/SUB_TITLE';
export const subTitle = createAction(SUB_TITLE);

let initialState = {
  value: 'HOME',
  subTitle:{
    view:false,
    value:''
  }
}

export default handleActions({
  [TITLE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(diff,'diffdiff');
      draft.value = diff.toUpperCase(); 
    })
  },
  [SUB_TITLE]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.subTitle.view = !state.subTitle.view
      draft.subTitle.value = diff.toUpperCase(); 
    })
  }
}, initialState)