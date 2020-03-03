import React,{useEffect} from 'react';
import { WorksSearch } from 'components/common/search';
import {useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { 
  LISTING_WORKS_SEARCH_SAGAS,
  INFO_CASE_LOAD_SAGAS,
  INFO_CASE_DELETE_SAGAS,
} from 'store/actions';
import { PlainModal } from 'components/common/modal';
import {useImmer} from 'use-immer';
import {ModalComplete,ModalConfirmContent} from 'components/common/modal';

// import {Toastify} from 'components/common/toastify';


function PatientSearchContainer(props) {
  const {
    auth:authReducer,
    listing:listingReducer,
    info:infoReducer
  } = useSelector(state=>state);

  const userCode = authReducer.signIn.profile.userCode;
  const [values,setValues] = useImmer({
    modal:{
      title:"",
      subtitle:"",
      type:"confirm",
      isShow:false
    },
    index:0
  });
  
  const onSearch = config =>{
    const searchConfig ={
      userCode : userCode,
      // page:listingReducer.works.pagingData.page,
      page:1,
      sort: config.sort, 
      search :config.search,
      type :config.type,
      first:config.first,
    };
    console.log(searchConfig,'searchConfig@@@@@@@@@@@@@@@@@@@@@@@@@@');

    LISTING_WORKS_SEARCH_SAGAS(searchConfig);
  }

  
  const onClick = config=>{
    const {type,value} = config;
    if(type === 'load'){
      if(!listingReducer.works.currentCode){
        setValues(draft=>{
          draft.modal.type= 'alert';
          draft.modal.isShow = true;
          draft.modal.title = '로드 실패.';
          draft.modal.subtitle = '로드할 Works를 선택해주세요.';
        });
      }else{
        setValues(draft=>{
          draft.index = draft.index+1
        })
        const loadConf ={
          "userCode" : userCode,
          "caseCode" : listingReducer.works.currentCode
        }
        INFO_CASE_LOAD_SAGAS(loadConf);
        
      }
    }
    if(type === 'delete'){
      if(!listingReducer.works.currentCode){
        setValues(draft=>{
          draft.modal.type = 'delete';
          draft.modal.isShow = true;
          draft.modal.title = '삭제하시겠습니까?';
          draft.modal.subtitle = '삭제 된 케이스를 복구할 수 없습니다.';
        });
      }else{
        setValues(draft=>{
          draft.modal.type = 'delete_ok';
          draft.modal.isShow = true;
          draft.modal.title = '삭제하시겠습니까?';
          draft.modal.subtitle = '삭제 된 케이스를 복구할 수 없습니다.';
        });
      }


    }
    if(type === 'refresh'){
      console.log(type,value);
      window.location.reload();
    }
  }

  // NOTE: Works Delete
  const isDeleteSuccess = infoReducer.case.delete.success;
  const isDeleteFailure = infoReducer.case.delete.failure;
  useEffect(()=>{
    if(isDeleteSuccess){
      const userCode = authReducer.signIn.profile.userCode;
      const rSearch = listingReducer.works.search;
      // const searchPage = listingReducer.works.pagingData;
      const searchConfig ={
        userCode : userCode,
        page:1,
        sort: rSearch.sort, 
        search :rSearch.search,
        type :rSearch.type,
        first:true
      }
      
      setValues(draft=>{
        draft.modal.isShow = false;
      });  
      LISTING_WORKS_SEARCH_SAGAS(searchConfig);
      // window.location.reload();
    }
  // DEBUG: delete부분 보기
    if(isDeleteFailure){
      setValues(draft=>{
        draft.modal.type ="alert"
        draft.modal.isShow = true;
        draft.modal.title= '삭제를 실패하였습니다.';
        draft.modal.subtitle= '잠시 후 다시 시도해주세요.';
      });
    }

  },[isDeleteSuccess,isDeleteFailure]);


  // NOTE: Case Load
  const isCaseLoadSuccess = infoReducer.case.load.success;
  const isCaseLoadFailure = infoReducer.case.load.failure;
  useEffect(()=>{
    const initIdx = values.index !== 0;
    if(isCaseLoadSuccess && initIdx){
      props.history.push('/case');
    }
    if(isCaseLoadFailure && initIdx){
      console.log(infoReducer.case.load);
      setValues(draft=>{
        draft.modal.type= 'alert';
        draft.modal.isShow = true;
        draft.modal.title = '로드 실패.';
        draft.modal.subtitle = '잠시 후 다시 시도해주세요.';
      });
    }
  },[isCaseLoadSuccess,isCaseLoadFailure]);


  
  const isWorksLoadListSuccess = listingReducer.works.success;
  useEffect(()=>{
    if(isWorksLoadListSuccess){
      // console.log(listingReducer.works.search);
      // console.log('세팅해줘야함');
    }
  },[isWorksLoadListSuccess]);

  useEffect(()=>{
    return ()=>{
      INFO_CASE_DELETE_SAGAS.init();
      LISTING_WORKS_SEARCH_SAGAS.init();
    }
  },[]);


  
  const handleClick = _.debounce(config=>{
    const {type,name,value} = config;
    if(type === 'modal'){
      if(name === 'delete_ok'){
        const deleteConf={
          "userCode" : userCode,
          "caseCodeArr" : [listingReducer.works.currentCode]
        }
        INFO_CASE_DELETE_SAGAS(deleteConf);

      }else{
        setValues(draft=>{
          draft.modal.isShow = false;
        });
      }
    }
  },300)

  return (
    <div>
      <PlainModal
        isOpen={values.modal.isShow}
        content={
          values.modal.type === 'alert'
          ?<ModalComplete
            title={values.modal.title}
            children={values.modal.subtitle}
            onClick={() => handleClick({ type: 'modal',name:"dim" })}

        />
          :<ModalConfirmContent
          title={values.modal.title}
          subtitle={values.modal.subtitle}
          okClick={(value) => handleClick({type:"modal",name:values.modal.type,value})}
          cancelClick={(value) => handleClick({ type: 'modal',name:"dim" })}
        />
        }
        dim={false}
        width={380}
      />
      <WorksSearch
        type={listingReducer.search.type}
        onClick={onClick}
        onSearch={onSearch}
        rSearch={listingReducer.works.search}
      />
    </div>
  );
}

export default withRouter(PatientSearchContainer);







