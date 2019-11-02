import { handleActions } from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';
import { cookie, keys } from 'utils'

const cookieEmail = cookie.get(`${keys.user}email`);
const cookieRemember = !!cookie.get(`${keys.user}remember`);
let initialState = {
  authLoginEmail: cookieEmail,
  authLoginRemember: cookieRemember,
  profile: null,
  autheticate: {
    pending: false,
    success: false,
    failure: false,
    isAutheticated: false,
  },
  register: {
    pending: false,
    result: null,
    success: false,
    failure: false
  }
}


export default handleActions({
  [actions.AUTH_LOGIN_PENDING]: (state, { payload: diff }) => {
    console.log('>>> AUTH_LOGIN_PENDING');
    return produce(state, draft => {
      const { autheticate } = draft;
      autheticate.pending = true;
      autheticate.isAutheticated = false;
      autheticate.failure = false

      draft.profile = null;
    })
  },
  [actions.AUTH_LOGIN_SUCCESS]: (state, { payload: diff }) => {
    console.log(`>>> AUTH_LOGIN_SUCCESS`);
    return produce(state, draft => {
      const { autheticate } = draft;
      autheticate.pending = false;
      autheticate.isAutheticated = true;
      autheticate.failure = false

      draft.profile = diff.profile;
    })
  },
  [actions.AUTH_LOGIN_FAILURE]: (state, { payload: diff }) => {
    console.log(`>>> AUTH_LOGIN_FAILURE`);
    return produce(state, draft => {
      const { autheticate } = draft;
      autheticate.pending = false;
      autheticate.isAutheticated = false;
      autheticate.failure = diff;

      draft.profile = null;
    })
  },

  [actions.AUTH_LOGOUT_PENDING]: (state, { payload: diff }) => {
    console.log(`>>> AUTH_LOGOUT_PENDING`);
    return produce(state, draft => {
      const { autheticate } = draft;
      autheticate.isAutheticated = false;
      autheticate.pending = false;

      draft.profile = null;
    })
  },
  [actions.AUTH_LOGOUT_SUCCESS]: (state, { payload: diff }) => {
    console.log(`>>> AUTH_LOGOUT_SUCCESS`);
    return produce(state, draft => {
      const { autheticate } = draft;
      autheticate.pending = false;
      autheticate.isAutheticated = false;

      draft.profile = null;
    })
  },
  [actions.AUTH_LOGOUT_FAILURE]: (state, { payload: diff }) => {
    console.log(`>>> AUTH_LOGOUT_FAILURE`);
    return produce(state, draft => {

    })
  },

  [actions.AUTH_REGISTER_PENDING]: (state, { payload: diff }) => {
    console.log(`>>> AUTH_REGISTER_PENDING`);
    return produce(state, draft => {
      draft.register.pending = true;
    })
  },
  [actions.AUTH_REGISTER_SUCCESS]: (state, { payload: diff }) => {
    console.log(`>>> AUTH_REGISTER_SUCCESS`);
    return produce(state, draft => {
      const {register,autheticate} = draft;
      register.pending = false;
      register.success = true;
      register.failure = false;
      autheticate.isAutheticated = true;
      draft.profile = diff;
    })
  },
  [actions.AUTH_REGISTER_FAILURE]: (state, { payload: diff }) => {
    console.log(`>>> AUTH_REGISTER_FAILURE`);
    return produce(state, draft => {
      const {register} = draft;
      register.pending = false;
      register.success = false;
      register.failure = diff;
    })
  },



}, initialState)




