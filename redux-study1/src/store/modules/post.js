import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import axios from 'axios';
import { pender } from 'redux-pender';


async function getPostAPI(postId) {
  return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST = 'GET_POST';

// 여기서 중간에 있는 dispatch 가 redux-thunk를 통해서 가져오는 친구임.
// getStateeh 도 마찬가지
export const getPost = createAction(GET_POST, getPostAPI)

const initialState = {
  pending: false,
  error: false,
  data: {
    title: '',
    body: ''
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
      const { title, body } = data;
      return produce(state, draft => {
        draft.pending = false;
        draft.data = { title, body }
      })
    },
    onFailure: (state, action) => {
      return produce(state, draft => {
        draft.pending = false;
        draft.error = true;
      })
    }
  })
}, initialState)