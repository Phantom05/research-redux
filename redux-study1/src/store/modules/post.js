import {handleActions} from 'redux-actions';
import produce from 'immer';
import axios from 'axios';

async function getPostAPI(postId){
  return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

// 여기서 중간에 있는 dispatch 가 redux-thunk를 통해서 가져오는 친구임.
// getStateeh 도 마찬가지
export const  getPost = (postId) => (dispatch,getState) =>{
  // 먼저, 요ㅕ청이 시작했다는 것을 알립니다.
   dispatch({type:GET_POST_PENDING});

  // 요청을 시작합니다,
  // 여기서 만든 promise 를 return 해줘야, 나중에 컴포넌트에서 호출 할 때 getPost().then(...) 을 할 수 있습니다,
  return  getPostAPI(postId).then(
    (response) =>{
      // 요청이 성공 했을 경우, 서버 응답 내용을 payload로 설정하여 GET_POST_SUCCESS 액션을 디스 패치 합니다,
      dispatch({
        type:GET_POST_SUCCESS,
        payload:response
      })
    }
  ).catch(err=>{
     dispatch({
      type:GET_POST_FAILURE,
      payload:err
    })
  })
}

const initialState ={
  pending:false,
  error:false,
  data:{
    title:'',
    body:''
  }
}

export default handleActions({
  [GET_POST_PENDING]:(state,action)=>{
    return produce(state,draft=>{
      draft.pending = true;
      draft.error = false;
    })
  },
  [GET_POST_SUCCESS]: (state, {payload:diff}) => {
    const { title, body } = diff.data;
    return  produce(state,draft=>{
      draft.pending = false;
      draft.data = {
        title, body
    };
    })
},
  [GET_POST_FAILURE]:(state,action)=>{
    return produce(state,draft=>{
      draft.pending = false;
      draft.error = true;
    })
  },
},initialState)