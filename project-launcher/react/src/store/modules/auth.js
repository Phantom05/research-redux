import { handleActions } from 'redux-actions';
import * as actions from 'store/actions';
import produce from 'immer';


let initialState = {
  signIn:{
    pending: false,
    isAutheticated: false,
    authCount:0,
    token:'',
    grade:0,
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
  [actions.AUTH_SIGNIN.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      const {signIn} = draft;
      signIn.pending = true;
      signIn.isAutheticated = false;
      signIn.token='';
      signIn.grade = 0;
    })
  },
  [actions.AUTH_SIGNIN.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      const {signIn} = draft;
      signIn.pending = false;
      signIn.isAutheticated = true;
      signIn.token = diff.token;
      signIn.profile = diff.profile;
      signIn.grade = 1;
    })
  },
  [actions.AUTH_SIGNIN.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      const {signIn} = draft;
      signIn.pending = false;
      signIn.isAutheticated = false;
      signIn.token='';
      signIn.authCount+=1;
      signIn.grade = 0;
    })
  },
  
  
  // NOTE: SIGN OUT
  [actions.AUTH_SIGNOUT.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('logout pending');
      const {signOut} = draft;
      signOut.pending = true;
      
    })
  },
  [actions.AUTH_SIGNOUT.SUCCESS]: (state, { payload: diff }) => {
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
      signIn.grade = 0;
    })
  },
  [actions.AUTH_SIGNOUT.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('logout failure');
      const {signOut} = draft;
      signOut.pending = false;
      signOut.failure = true;
      signOut.success = false;
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


