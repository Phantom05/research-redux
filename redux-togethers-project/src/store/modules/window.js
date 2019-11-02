import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as acions from 'store/actions';


let initialState ={
  page:'/'
}
export default handleActions({
  [acions.PAGE]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      
    })
  }
},initialState )