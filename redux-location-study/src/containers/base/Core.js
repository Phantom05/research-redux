import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Actions } from 'store/actionCreators';
import {useSelector} from 'react-redux';
import throttle from 'lodash/throttle';

function Core(){
  const {base:baseReducer} = useSelector(state=>state);
  const landing = baseReducer.landing;

  const initialize = async () => {
    const token = false;
    if (!token) {
      return Actions.base_exit_landing();
    }
  }
  const setWidth = () => {
    if (typeof window === 'undefined') return;
  };

  const onResize = throttle(() => {
    setWidth();
  }, 250);

  useEffect(()=>{
    initialize();
  },[]);

  useEffect(()=>{
    window.addEventListener('resize', onResize);
    return ()=>{
      window.removeEventListener('resize', onResize);
    }
  },[onResize]);

  return(
    <>
    {landing && 'Loading...'}
    </>
  )
}

export default withRouter(Core);



