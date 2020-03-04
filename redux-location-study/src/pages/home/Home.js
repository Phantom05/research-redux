import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {useImmer} from 'use-immer';
import _ from 'lodash';
import {TestList} from 'components/common/listing';
import {TEST_SAGAS} from 'store/actions';

// import {useDidUpdateEffect} from 'lib/utils';

const intialState={
  list:[],
}

function Home() {
  const [values,setValues] = useImmer(intialState);
  const {base:baseReducer} = useSelector(state=>state);

  const handleClick = _.debounce(() =>{
    TEST_SAGAS( Math.ceil(Math.random()*5) );
  },150);

  // NOTE: list upload
  const isSagaTestSuccess = baseReducer.sagaTest.success;
  useEffect(()=>{
    if(isSagaTestSuccess){
      setValues(draft=>{
        draft.list = baseReducer.sagaTest.list;
      });
    }
  },[baseReducer.sagaTest.list,isSagaTestSuccess,setValues]);



  console.log('home');
  return (
    <Styled.Home>
      <button 
        onClick={handleClick}
        className="test__btn"
      >LIST RANDOM</button>

      <div>
        <TestList 
          list={values.list}
        />
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