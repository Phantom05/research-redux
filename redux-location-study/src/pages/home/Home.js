import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {TEST_SAGAS} from 'store/actions';
import {useImmer} from 'use-immer';
import _ from 'lodash';
// import {useDidUpdateEffect} from 'lib/utils';

const intialState={
  list:[]
}

function Home() {
  const [values,setValues] = useImmer(intialState);
  const {base:baseReducer} = useSelector(state=>state);

  const handleClick = _.debounce(() =>{
    TEST_SAGAS( Math.ceil(Math.random()*5) );
  },150);

  const isSagaTestSuccess = baseReducer.sagaTest.success;
  useEffect(()=>{
    if(isSagaTestSuccess){
      setValues(draft=>{
        draft.list = baseReducer.sagaTest.list;
      });
    }
  },[baseReducer.sagaTest.list,isSagaTestSuccess,setValues]);



  return (
    <Styled.Home>
      <button 
        onClick={handleClick}
        className="test__btn"
      >REDUX_TEST</button>
      <div>
        {values.list.map((item,idx)=>{
          return (
          <div key={idx}>
            {item.title}
          </div>
          )
        })}
      </div>
    </Styled.Home>
  );
}

const Styled = {
  Home:styled.div`
  & > {
    .test__btn{
      display:inline-block;
      border:0;
      padding:10px 15px;
      cursor: pointer;
    }
  }
  `
}

export default withRouter(Home);