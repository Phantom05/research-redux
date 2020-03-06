import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {useImmer} from 'use-immer';
import _ from 'lodash';
import {TestList} from 'components/common/listing';
import {TEST_SAGAS} from 'store/actions';
import { subtotalSelector,loopSelecor } from 'lib/selectors'


// import {useDidUpdateEffect} from 'lib/utils';
const intialState={
  list:[],
  shop: {
    taxPercent: 8,
    items: [
      { name: 'apple', value: 1.20 },
      { name: 'orange', value: 0.95 },
    ]
  },
  i:10000
}

function Home() {
  const [values,setValues] = useImmer(intialState);
  const {base:baseReducer} = useSelector(state=>state);
  const rSagaTest = baseReducer.sagaTest;
  const handleClick = _.debounce(() =>{
    TEST_SAGAS( Math.ceil(Math.random()*5) );
  },150);

  // NOTE: list upload
  const isSagaTestSuccess = rSagaTest.success;
  useEffect(()=>{
    if(isSagaTestSuccess){
      setValues(draft=>{
        draft.list = rSagaTest.list;
      });
    }
  },[rSagaTest.list,isSagaTestSuccess,setValues]);


  console.log(baseReducer.sagaTest);

  console.time()
  console.log(
    loopSelecor(values)
  );
  console.timeEnd()

  console.time();
  let res;
  for(let i = 0 ; i < values.shop.i ; i++){
    res += 1;
  }
  console.log(res);
  console.timeEnd();


  return (
    <Styled.Home>
      <button 
        onClick={handleClick}
        className="btn"
      >LIST RANDOM</button>

      <div>
        <TestList list={values.list}/>
      </div>
    </Styled.Home>
  );
}

const Styled = {
  Home:styled.div`
  & {
    .btn{
      display:inline-block;
      border:0;
      padding:10px 15px;
      cursor: pointer;
    }
  }
  `
}

export default withRouter(Home);