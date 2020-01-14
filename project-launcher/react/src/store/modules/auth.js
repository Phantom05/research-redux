import { handleActions } from 'redux-actions';
import * as actions from 'store/actions';
import produce from 'immer';


let initialState = {
  signIn:{
    pending: false,
    isAutheticated: false,
    authCount:0,
    token:'',
    profile:{},
  },
  signOut:{
    pending:false,
    success:false,
    failure:false,
  }
}


export default handleActions({
  // NOTE: SIGN IN , TOKEN
  [actions.AUTH_SIGNIN_PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      const {signIn} = draft;
      signIn.pending = true;
      signIn.isAutheticated = false;
      signIn.token='';
    })
  },
  [actions.AUTH_SIGNIN_SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      const {signIn} = draft;
      signIn.pending = false;
      signIn.isAutheticated = true;
      signIn.token = diff.token;
      signIn.profile = diff.profile;
    })
  },
  [actions.AUTH_SIGNIN_FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      const {signIn} = draft;
      signIn.pending = false;
      signIn.isAutheticated = false;
      signIn.token='';
      signIn.authCount+=1;
    })
  },
  
  
  // NOTE: SIGN OUT
  [actions.AUTH_SIGNOUT_PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('logout pending');
      const {signOut} = draft;
      signOut.pending = true;
    })
  },
  [actions.AUTH_SIGNOUT_SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('logout success');
      const {signOut,signIn} = draft;
      signOut.pending = false;
      signOut.failure = false;
      signOut.success = true

      signIn.pending = false;
      signIn.isAutheticated = false;
      signIn.token='';
      signIn.authCount=0;
      signIn.profile={};
    })
  },
  [actions.AUTH_SIGNOUT_FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('logout failure');
      const {signOut} = draft;
      signOut.pending = false;
      signOut.failure = true;
      signOut.success = false
    })
  },


// NOTE: TOKEN
  // [actions.AUTH_TOKEN_PENDING]: (state, { payload: diff }) => {
  //   return produce(state, draft => {
  //     console.log('token pending');
  //     const {signIn} = draft;
  //     signIn.pending = false;
  //     signIn.isAutheticated = false;
  //     signIn.token='';
  //   })
  // },
  // [actions.AUTH_TOKEN_SUCCESS]: (state, { payload: diff }) => {
  //   return produce(state, draft => {
  //     console.log('token success');
  //     const {signIn} = draft;
  //     console.log(diff);
  //     signIn.pending = false;
  //     signIn.isAutheticated = true;
  //     signIn.token=diff.token;
  //   })
  // },
  // [actions.AUTH_TOKEN_FAILURE]: (state, { payload: diff }) => {
  //   return produce(state, draft => {
  //     console.log('token failure');
  //     const {signIn} = draft;
  //     signIn.pending = false;
  //     signIn.isAutheticated = false;
  //     signIn.token='';
  //   })
  // },

}, initialState);


