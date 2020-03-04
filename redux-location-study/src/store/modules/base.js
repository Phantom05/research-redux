
import {handleActions} from 'redux-actions';
import * as actions from 'store/actions';
import produce from 'immer';
import {IPSFset} from 'lib/utils';


export const initialState={
  landing:true,
  sagaTest:{
    list:[],
    pending:false,
    success:false,
    failure:false,
  },
};

export default handleActions({
  [actions.BASE_EXIT_LANDING]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('BASE_EXIT_LANDING');
      draft.landing = false;
    })
  },
  [actions.BASE_ENTER_LANDING]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('BASE_ENTER_LANDING');
      draft.landing = true;
    })
  },

  // NOTE:
  [actions.TEST.INIT]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      // console.log('>>>TEST_SAGAS INIT');
      draft.sagaTest = initialState.sagaTest;
    })
  },
  [actions.TEST.PENDING]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      // console.log('>>>TEST_SAGAS pending');
      IPSFset(draft.sagaTest,'pending');
    })
  },
  [actions.TEST.SUCCESS]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      // console.log('>>>TEST_SAGAS success');
      console.log(diff);
      draft.sagaTest.list = diff.articles;
      IPSFset(draft.sagaTest,'success');
    })
  },
  [actions.TEST.FAILURE]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      // console.log('>>>TEST_SAGAS failure');
      IPSFset(draft.sagaTest,'failure');
    })
  },
  
},initialState);

