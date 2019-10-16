
import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import axios from 'axios';

const DEFAULT = 'post/DEFAULT';
const INCREMENT = 'post/INCREMENT';
const DECREMENT = 'post/DECREMENT';
const GET_POST_PENDING = 'post/GET_POST_PENDING';
const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
const GET_POST_ERROR = 'post/GET_POST_ERROR';


export const defaultPost = createAction(DEFAULT);
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
// 'https://jsonplaceholder.typicode.com/posts/1'



const getPost = async (postId) =>{
  return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

export const getPostAsync = (postId) => async (dispatch) =>{
console.log('in');
  dispatch({type:GET_POST_PENDING});
  getPost(postId)
  .then(response=>{
    const {data} = response;
    console.log(data);
    dispatch({
      type:GET_POST_SUCCESS,
      payload:data
    })
  })
  .catch(err =>{
    console.log(err);
    dispatch({
      type:GET_POST_ERROR,
      payload:err
    })
  })

}

// getPostAsync

let initialState ={
  pending:false,
    error:false,
   data:{
     title:'',
     content:''
   },
   number:1
}




export default handleActions({
  [DEFAULT]:(state,{payload:diff})=>{
    return produce(state,draft=>{

    })
  },
  [DECREMENT]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.number--;
    })
  },
  [INCREMENT]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.number++;
    })
  },
  [GET_POST_PENDING]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.pending = true;
      draft.error = false
    }) 
  },
  [GET_POST_SUCCESS]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.pending = false;
      draft.data.title = diff.title;
      draft.data.content = diff.body
    })
  },
  [GET_POST_ERROR]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.pending = false;
      draft.error = diff.err
    })
  },
},initialState)