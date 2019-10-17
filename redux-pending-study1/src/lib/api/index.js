import axios from 'axios';


export const getPost = async (postId) =>{
  return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}