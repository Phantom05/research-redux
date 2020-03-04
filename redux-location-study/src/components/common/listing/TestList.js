import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useImmer} from 'use-immer';
import {TestItem} from 'components/common/item';
import {TEST_DETAIL_SAGAS} from 'store/actions';


const intialState={
  detail:{}
}
function TestList(props) {
  const [values,setValues] = useImmer(intialState);
  const {base:baseReducer} = useSelector(state=>state);

  const handleClick= config=>{
    console.log(config);
    // const detailConf={
    //   slug:config.slug
    // }
    // TEST_DETAIL_SAGAS(detailConf);
  }

  // NOTE: detail upload
  const isSagaTestDetailSuccess = baseReducer.sagaTestDetail.success;
  useEffect(()=>{
    if(isSagaTestDetailSuccess){
      setValues(draft=>{
        draft.detail= baseReducer.sagaTestDetail.data;
      });
    }
  },[baseReducer.sagaTestDetail.data,isSagaTestDetailSuccess,setValues]);

  return (
    <div>
      {props.list.map((item,idx)=>{
        return <TestItem key={idx} idx={idx} info={item} onClick={handleClick} detail={values.detail}/>
      })}
      
    </div>
  );
}

export default TestList;