import {bindActionCreators} from 'redux';
import * as actions from 'store/actions';
import store from 'store';

const {dispatch} = store;

export const Actions = bindActionCreators(actions, dispatch);


// export function makeActionCreator(actionType,payload) {
//   return store.dispatch({ type: actionType, payload:payload })
// }
// export function makeAsyncCreateActions(actions){
//   const ActionsFunction = (payload)=>makeActionCreator(actions.INDEX,payload);
//   return (api)=>{
//     if(typeof api !== 'function') new Error('api must be Function');
//     ActionsFunction.request = (data)=>  api(data);
//     ActionsFunction.pending = (payload)=>makeActionCreator(actions.PENDING,payload);
//     ActionsFunction.success = (payload)=>makeActionCreator(actions.SUCCESS,payload);
//     ActionsFunction.failure = (payload)=>makeActionCreator(actions.FAILURE,payload);
//     return ActionsFunction
//   }
// }
