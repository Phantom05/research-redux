import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';


export const COMMON_WINDOW      = 'common/WINDOW';
export const MINIMIZE = 'window/MINIMIZE';

export const commonwindow        = createAction(COMMON_WINDOW );
export const minimize = createAction(MINIMIZE)


const initialState = {
  load:false,
  grade:'user',
  minimize: {
    active: false
  },
  maxmize: {
    active: false
  },
  exit: {
    active: false
  },
  panel:{
    navigation:{
      view:true,
    },
    stage:{
      view:true,
    },
    play:{
      view:true,
    },
    viewbox:{
      view:false,
    },
  },
}

export default  handleActions({
  [COMMON_WINDOW]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log(diff);
    })
  },
  [MINIMIZE]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log(' minimize');
    })
  }
},initialState)