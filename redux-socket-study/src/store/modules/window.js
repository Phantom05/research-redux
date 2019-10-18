import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';


export const TITLE = 'window/TITLE';
export const title = createAction(TITLE);

let initialState = {
  value: 'HELLO'
}

export default handleActions({
  [TITLE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      draft.value = diff.toUpperCase(); 
    })
  }
}, initialState)