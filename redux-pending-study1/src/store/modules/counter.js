
import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import {pender} from 'redux-pender';
import {
  INCREMENT,
  DECREMENT,
  GET_POST
} from 'store/actions';

let initialState = {
  number:0,
  pending:false,
  error:false,
  post:{
    title:'',
    body:''
  }
}

export default handleActions({
  [INCREMENT]:(state,{payload:diff})=>{
    return produce(state,draft => {
      draft.number++;
    })
  },
  [DECREMENT]:(state,{payload:diff})=>{
    return produce(state,draft => {
      draft.number--;
    })
  },
  ...pender({
    type:GET_POST,
    onPending:(state,{payload:response})=>{
      return produce(state,draft=>{
        draft.pending = true;
        draft.error = false;
      })
    },
    onSuccess:(state,{payload:response})=>{
      const {data:{title, body}} = response;
      return produce(state,draft=>{
        draft.pending=false;
        draft.error=false;
        draft.post = {title,body}
      })
    }
  })
},initialState)