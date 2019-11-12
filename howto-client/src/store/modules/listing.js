import { handleActions } from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';


const initialListingSet = {
  posts: null,
  prefetched: null,
  end: false,
};

let initialState = {
  count:10,
  recent:{...initialListingSet}
}


export default handleActions({
  [actions.HOME_TEST]: (state, { payload: diff }) => {
    console.log(`>>> HOME_TEST`);
    return produce(state, draft => {
      
    })
  }


}, initialState)




