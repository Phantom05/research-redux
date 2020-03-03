import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import { WorksCardListPanel } from 'components/common/panel';
import {CustomLoadingCircle} from 'components/base/loading';  
import styled from 'styled-components';

import {
  LISTING_WORKS_SEARCH_SAGAS,
  INFO_WORKS_APP_DATA_UPLOAD_SAGAS,
  INFO_CASE_COMPLETE_SAGAS
} from 'store/actions';


function WorkContainer() {
  const {
    // auth:authReducer,
    listing:listingReducer,
    info:infoReducer
  } = useSelector(state=>state);

  const newList = listingReducer.works.groupList;

  useEffect(()=>{
    return ()=>{
      LISTING_WORKS_SEARCH_SAGAS.init();
      INFO_WORKS_APP_DATA_UPLOAD_SAGAS.init()
      INFO_CASE_COMPLETE_SAGAS.init();
    }
  },[]);
 
  if(listingReducer.works.pending ){
    return (
       <Styled.WorksWhite >
         <div className="works__loading">
          <CustomLoadingCircle />
         </div>
       </Styled.WorksWhite>
     );
  }
  
  return (
    <>
      <WorksCardListPanel
        info={infoReducer.works}
        worksList={newList}
      />
    </>
  );
}

export default WorkContainer;

const Styled ={
  WorksWhite:styled.div`
    position:relative;
    min-height:71vh;
    .works__loading{
      z-index:1;
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      color:red;
    }
  `
}


  // if(!listingReducer.works.success || true) return (
  //   <Styled.WorksWhite >
  //     <span className="works__loading">
  //       <LoadingCircle size={30}/>
  //     </span>
  //   </Styled.WorksWhite>
  // );



//   const userCode =authReducer.signIn.profile.userCode;
// works list랑 case update랑 달라서그럼....... 이거 잡아야함
 // const handleSubmit = config=>{
  //   const {type, value} = config;
  //   console.log(config);
  //   if(type ==='edit_ok'){
  //     INFO_CASE_UPDATE_SAGAS(value);
  //   }
  // }




        // onClick={handleClick}
  // const handleClick = config=>{
  //   const detailConf ={
  //     userCode : userCode,
  //     caseCode : config.caseCode,
  //   }
  //   if(config.caseCode === infoReducer.works.data.caseCode){
  //     INFO_WORKS_DETAIL_SAGAS.init();
  //   }else{
  //     INFO_WORKS_DETAIL_SAGAS(detailConf);
  //   }
  // }
  
  // const handleClick = config=>{
  //   console.log(config);
  // }