import { handleActions } from 'redux-actions';
import * as actions from 'store/actions';
import produce from 'immer';


let initialState = {
  executorNav:{
    isOpen:true
  }
}


export default handleActions({
  // NOTE: EXECUTOR_NAV
  [actions.COMMON_EXECUTOR_NAV]: (state, { payload: diff }) => {
    return produce(state, draft => {
      const {executorNav} = draft;
      console.log(draft,'executorNav');
      console.log(executorNav.isOpen);
      executorNav.isOpen = !executorNav.isOpen;
    })
  },

}, initialState);


