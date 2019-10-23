import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';


let initialState={
  connect:true,
  host:null,
  blocking:false
}
export default handleActions({
  [actions.WS_CONNECTED]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('connect');
      console.log(diff);
      draft.host = diff;
      draft.connect = true;
    })
  },
  [actions.WS_DISCONNECTED]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.connect = false;
    })
  },
  [actions.WS_BLOCKING]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.blocking = true;
    })
  },
  [actions.WS_UNBLOCK]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.blocking = false;
    })
  }
},initialState);



// SocketActions.ws_connect()
// SocketActions.ws_disconnect()