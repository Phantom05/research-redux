
import React,{ useState, useEffect,useReducer,useCallback } from 'react';
import {useSelector} from 'react-redux';

/**
 * usePromise
 * @param {*} promiseCreator Promise Object
 * @param {*} deps array
 */
export function usePromise(promiseCreator, deps) {
  const [resolved, setResolved] = useState(null);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(null);

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
export const useInput = (function(){
  function reducer(state,action){
    return { ...state, [action.name]:action.value }
  }

  return function useInput(initialForm) {
    const [state,dispatch] = useReducer(reducer,initialForm);
  
    const onChange = e =>{
      dispatch(e.target);
    }
    return [state,onChange];
  }
})() 


export const useLanding =(Component)=>{
  const baseReducer = useSelector(state=>state.base);
  const {landing} = baseReducer;

  if(landing){
    console.log('Base landing...');
    return <h4>Landing...</h4>
  }else{
    return Component
  }
}