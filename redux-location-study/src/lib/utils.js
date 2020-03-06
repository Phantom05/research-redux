
import React, { 
  // useState,
  useEffect,
  useRef,
  useReducer } from 'react';
import {call} from 'redux-saga/effects';
import { AlertFn } from 'lib/library';
import {dispatch} from 'store/actionCreators';
// import _ from 'lodash';

// SECTION: Redux Saga, Actions

/**
 * Actions Name
 * @param {*} actionName string
 */
export function makeAsyncActions(actionName) {
  const prefix = actionName;
  const prefixObj = {
    INDEX   : 'INDEX',
    INIT    : `INIT`,
    REQUEST : `REQUEST`,
    PENDING : `PENDING`,
    SUCCESS : `SUCCESS`,
    FAILURE : `FAILURE`,
  }
  for(const item in prefixObj){
    prefixObj[item] = prefix + `_${item}`;
  }
  prefixObj.init = (payload)=>makeActionCreator(prefixObj.INIT,payload);
  return prefixObj;
}

/**
 * makeActionCreator
 * @param {*} actionType 
 * @param {*} payload 
 */
export function makeActionCreator(actionType,payload) {
  return dispatch({ type: actionType, payload:payload })
}

/**
 * makeAsyncActions
 * @param {*} actions Object
 */
export function makeAsyncCreateActions(actions){
  const ActionsFunction = (payload)=>makeActionCreator(actions.INDEX,payload);
  return (api)=>{
    if(typeof api !== 'function') new Error('api must be Function');
    ActionsFunction.index = actions.INDEX;
    ActionsFunction.request = (data)=>  api(data);
    ActionsFunction.init = (payload)=>makeActionCreator(actions.INIT,payload);
    ActionsFunction.pending = (payload)=>makeActionCreator(actions.PENDING,payload);
    ActionsFunction.success = (payload)=>makeActionCreator(actions.SUCCESS,payload);
    ActionsFunction.failure = (payload)=>makeActionCreator(actions.FAILURE,payload);
    return ActionsFunction
  }
}

/**
 * 
 * @param {*} type 
 * @param {*} promiseCreator 
 */
export const createPromiseSaga = ({
  type, 
  tag,
  pending = ()=>{},
  success = ()=>{},
  failure = ()=>{}
} ) => {
  return function* saga(action) {
    AlertFn(tag);
    if(!type) {
      console.warn(`createPromiseSaga Need type`);
      return null;
    };
    const payload = action.payload;
    pending(action);
    type.pending();
    const {data,error} =yield call(type.request,payload);
    console.log(` %cResponse Data :\n`,"color:red;padding:5px;font-weight:bold",data);
    data.payload = payload;
    if(data && !error){
      success(data);
      type.success(data);
    }else{
      failure(data);
      type.failure(data);
    }
  };
};

// SECTION: use
/**
 * usePromise
 * @param {*} promiseCreator Promise Object
 * @param {*} deps array
 */
// export function usePromise(promiseCreator, deps) {
//   const [resolved, setResolved] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const processor = async () => {
//     setLoading(true);
//     try {
//       const result = await promiseCreator();
//       setResolved(result);
//     } catch (e) {
//       setError(e);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     processor();
//   }, [deps,processor]);

//   return [loading, resolved, error];
// }


/**
 * useInput
 * @param {*} initialForm object
 */
export const useInput = (function () {
  function reducer(state, action) {
    return { ...state, [action.name]: action.value }
  }

  return function useInput(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = e => {
      dispatch(e.target);
    }
    return [state, onChange];
  }
})();



/**
 * DidUpdateMount를 구현한 Custom hooks
 * @param {*} fn 
 * @param {*} inputs 
 */
// export function useDidUpdateEffect(fn, inputs) {
//   const didMountRef = useRef(false);
//   useEffect(() => {
//     if(didMountRef.current){
//       fn();
//     }
//     else{
//       didMountRef.current = true;
//     }
//   }, inputs);
// }

export function useDidUpdateEffect(fn, inputs) {
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fn();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, inputs);
}



/**
 * 
 * @param {*} f 
 */
export const useDidMount = f => useEffect(() => f && f(), [f]);

//SECTION: Hign Order Component (HOC)
/**
 * 
 * @param {*} url 
 */
export const withLoading = (WrappedComponent) => (props) =>{
  return props.isLoading
  ? (console.log('Base landing...'),<div>Loading ...</div>)
  : <WrappedComponent { ...props } />
}



export function IPSFset(draft,type){
  draft.pending = false;
  draft.success = false;
  draft.failure = false;
  if(draft[type] !== 'init'){
    draft[type]   = true;
  }
}
