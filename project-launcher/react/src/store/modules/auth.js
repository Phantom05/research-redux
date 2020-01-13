
import produce from 'immer';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

let initialState = {
  pending: false,
  isAutheticated: false,
  token:'',
  profile:{},
  count:0,
  name:"HEllo"
}



const auth = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:

      state.count++;
      console.log(state);
      return state
    case DECREMENT:
      state.count--;
      console.log(state);
      return state
    default:
      return state;
  }
};

export default auth;