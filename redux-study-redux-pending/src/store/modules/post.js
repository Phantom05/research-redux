import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';
import {pender} from 'redux-pender';
import axios from 'axios';

const GET_POST = 'GET_POST';


async function getPostAPI(postId) {
  return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

export const getPostApi = createAction(GET_POST,getPostAPI);

let initialState={
  pending:false,
  error:false,
  data:{
    title:'',
    body:''
  }
  
}
export default handleActions({
  ...pender({
    type: GET_POST,
    onPending: (state, action) => {
      return produce(state, draft => {
        draft.pending = true;
        draft.error = false;
      })
    },
    onSuccess: (state, {payload:data}) => {
      const { title, body } = data.data;
      console.log('fd');
      console.log(data);
      return produce(state, draft => {
        console.log(data,'datadata');
        draft.pending = false;
        draft.data = {title,body};
      })
    }
  })
}, initialState)