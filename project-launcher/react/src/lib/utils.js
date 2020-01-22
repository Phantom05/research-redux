
import React, { useState, useEffect, useReducer } from 'react';
import {dispatch} from 'store/actionCreators';
// import { connect } from 'react-redux';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import {storage,keys} from 'lib/library';


// SECTION: Redux Saga, Actions

/**
 * Actions Name
 * @param {*} actionName string
 */
export function makeAsyncActions(actionName) {
  const prefix = actionName;
  const prefixObj = {
    INDEX : 'INDEX',
    REQUEST : `REQUEST`,
    PENDING : `PENDING`,
    SUCCESS : `SUCCESS`,
    FAILURE : `FAILURE`,
  }
  for(const item in prefixObj){
    prefixObj[item] = prefix + `_${item}`;
  }
  return prefixObj
}


/**
 * makeAsyncActions
 * @param {*} actions Object
 */
export function makeAsyncCreateActions(actions){
  function makeActionCreator(actionType,payload) {
    return dispatch({ type: actionType, payload:payload })
  }

  const ActionsFunction = (payload)=>makeActionCreator(actions.INDEX,payload);
  return (api)=>{
    if(typeof api !== 'function') new Error('api must be Function');
    ActionsFunction.index = actions.INDEX;
    ActionsFunction.request = (data)=>  api(data);
    ActionsFunction.pending = (payload)=>makeActionCreator(actions.PENDING,payload);
    ActionsFunction.success = (payload)=>makeActionCreator(actions.SUCCESS,payload);
    ActionsFunction.failure = (payload)=>makeActionCreator(actions.FAILURE,payload);
    return ActionsFunction
  }
}

// SECTION: use
/**
 * usePromise
 * @param {*} promiseCreator Promise Object
 * @param {*} deps array
 */
export function usePromise(promiseCreator, deps) {
  const [resolved, setResolved] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const process = async () => {
    setLoading(true);
    try {
      const result = await promiseCreator();
      setResolved(result);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    process();
  }, deps);

  return [loading, resolved, error];
}


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






