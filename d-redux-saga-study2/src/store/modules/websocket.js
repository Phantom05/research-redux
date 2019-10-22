import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';

let initialState={
  connect:false,
  host:null
}
export default handleActions({
  [actions.WS_CONNECTED]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      // console.log(diff);
      draft.host = diff;
      draft.connect = true;
    })
  },
  [actions.WS_DISCONNECTED]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.connect = false;
    })
  }
},initialState);



// SocketActions.ws_connect()
// SocketActions.ws_disconnect()