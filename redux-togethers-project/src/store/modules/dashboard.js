import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';


let initialState ={
  title:"dashboard"
}
export default handleActions({
  [actions.DASHBOARD_TITLE]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('hello dashboard title');

    })
  }
},initialState )