import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useImmer } from 'use-immer';
import { useDidUpdateEffect } from 'lib/utils';

import { AlertList } from 'components/common/listing';
import Checkbox from '@material-ui/core/Checkbox';
import { font, color } from 'styles/__utils';
import cx from 'classnames';
import styled from 'styled-components';
import CachedIcon from '@material-ui/icons/Cached';
// import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { PlainModal, ModalComplete } from 'components/common/modal';
import {withRouter} from 'react-router-dom';

import PagingContainer from 'containers/paging/PagingContainer';

import {
  MESSAGE_LIST_SAGAS,
  MESSAGE_LIST_DELETE_SAGAS,
  MESSAGE_UPDATE_SAGAS,
  MESSAGE_LIST_READ_SAGAS,
  // INFO_CASE_LOAD_SAGAS,
  LISTING_WORKS_SEARCH_SAGAS,
} from 'store/actions';

function AlertContainer(props) {
  const { auth: signReducer, listing: listReducer, info: infoReducer } = useSelector(state => state);
  const {
    userCode
  } = signReducer.signIn.profile;
  const {
    list,
    pagingData
  } = listReducer.message;
  const {
    messageUpdate,
    case: rCase
  } = infoReducer;

  const [values, setValues] = useImmer({
    page: 1,
    checkEventId: {},
    count: 1,
    modal: {
      current: null,
      open: false,
    }
  });
  const closeModal = () => {
    console.log("close modal");
    setValues(draft => {
      draft.modal.current = null;
      draft.modal.open = false;
    });
  }
  const modalObj = {
    'accept': <ModalComplete onClick={() => closeModal()} title="수락완료" children="파트너 요청을 수락했습니다." />,
    'deny': <ModalComplete onClick={() => closeModal()} title="거절완료" children="파트너 요청을 거절했습니다." />,
  }
  const modalCont = modalObj[values.modal.current];

  const messageConf = {
    page: values.page,
    userCode: userCode,
    // userCode: "20Jan31-0000"
  }



  useEffect(() => {
    MESSAGE_LIST_SAGAS(messageConf);
    setValues(draft => {
      draft.modal.open = false;
      draft.modal.current = null;
    });
  }, []);
  // useEffect(() => {
  //   MESSAGE_LIST_SAGAS(messageConf);
  // }, [values.page]);

  useDidUpdateEffect(() => {
    if (listReducer.message.success) {
      list.forEach(i => {
        const { eventLogIdx } = i;
        setValues(draft => {
          draft.checkEventId[eventLogIdx] = false;
        });
      });
    }
  }, [listReducer.message.success]);

  useDidUpdateEffect(() => {
    if (listReducer.message.update.success) {
      MESSAGE_LIST_SAGAS(messageConf);
      if (listReducer.message.update.success) {
      }
    }
  }, [listReducer.message.update.success]);

  useDidUpdateEffect(() => {
    if (messageUpdate.success) {
      MESSAGE_LIST_SAGAS(messageConf);
      if (messageUpdate.success) {
        setValues(draft => {
          draft.modal.open = true;
        });

      }
    }
  }, [messageUpdate.success]);

  useDidUpdateEffect(() => {
    if (rCase.load.success) {

    }
  }, [rCase.load.success]);



  const handleCheck = config => e => {
    const {
      type
    } = config;
    const targetCheck = e.target.checked;
    const targetValue = e.target.value;

    if (type === 'all') {
      list.forEach(i => {
        const { eventLogIdx } = i;
        setValues(draft => {
          draft.checkEventId[eventLogIdx] = targetCheck ? true : false;
        });
      });
    }
    if (type === 'single') {
      setValues(draft => {
        draft.checkEventId[targetValue] = targetCheck;
      });
    }

  }

  const handlePage = config => e => {
    if (config === 'prev') {
      if (pagingData.prevCheck) {
        setValues(draft => {
          draft.page = pagingData.page - 1;
        });
      }
    } else if (config === 'next') {
      if (pagingData.nextCheck) {
        setValues(draft => {
          draft.page = pagingData.page + 1;
        });
      }
    }

  }

  const handleClick = config => e => {
    const {
      type,
      partnerCode,
      caseCode
    } = config;
    // const userCode = "20Jan31-0000";

    const targetValue = e.target.value;

    if (type === 'delete') {
      let deletArry = [];
      Object.keys(values.checkEventId).forEach(i => {
        if (values.checkEventId[i] === true) {
          return deletArry.push(i);
        }
      });
      MESSAGE_LIST_DELETE_SAGAS({ userCode: userCode, eventLogIdxArr: deletArry });
    }
    if (type === 'read') {
      let readArray = [];
      Object.keys(values.checkEventId).forEach(i => {
        if (values.checkEventId[i] === true) {
          return readArray.push(i);
        }
      });
      MESSAGE_LIST_READ_SAGAS({ userCode: userCode, eventLogIdxArr: readArray });
    }
    if (type === 'accept') {
      console.log("accept", partnerCode);
      MESSAGE_UPDATE_SAGAS({ userCode: userCode, partnerCode: partnerCode, state: 1 });
      setValues(draft => {
        draft.modal.current = 'accept';
      });
    }
    if (type === 'deny') {
      console.log("deny", partnerCode);
      MESSAGE_UPDATE_SAGAS({ userCode: userCode, partnerCode: partnerCode, state: 2 });
      setValues(draft => {
        draft.modal.current = 'deny';
      });
    }
    if (type === 'refresh') {
      MESSAGE_LIST_SAGAS(messageConf);
    }
    if (type === 'link') {
      // const caseLoadConf = {
      //   userCode: userCode,
      //   // userCode: 'test09-20FEB-0001',
      //   caseCode: caseCode,
      //   // caseCode: '20200220-349f0c96-3e41-4192-befe-549e9571cacd',

      // }
      // INFO_CASE_LOAD_SAGAS(caseLoadConf);

      const worksSearchConf = {
        // userCode: "20Feb12-0002",
        userCode: userCode,
        page: 1,
        sort: 4,
        search: caseCode,
        // search: "20200226-Dof company-ㄱ소-0000",
        type: ""
      }
      console.log("LINK CONF", worksSearchConf);
      LISTING_WORKS_SEARCH_SAGAS(worksSearchConf);
    }
  }
  console.log("render");

// DEBUG:
  const testClick = config=>{
    const userCode = signReducer.signIn.profile.userCode;
    const testConfig={
      userCode : userCode,
      page:1,
      search:"20200303-기공소-테스크1-0002",
      sort:4,
      type :"",
      first:false,
      isLoad:true
    };
    LISTING_WORKS_SEARCH_SAGAS(testConfig);
    
  };

  const isSuccessSearch = listReducer.works.success;
  useEffect(()=>{
    if(isSuccessSearch && listReducer.works.search.isLoad){
      props.history.push('/works');
    }
  },[isSuccessSearch]);
  // DEBUG:

  return (

    <>
    <button onClick={testClick}>Search Test</button>
  
      <Styled.AlertContainer>

        <div className="AlertContainer__sort_box">
          <div className={cx("AlertContainer__sort", "sort_checkbox")}>
            <Checkbox
              value="secondary"
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              onChange={handleCheck({ type: 'all' })}
            />
          </div>
          <div className={cx("AlertContainer__sort", "sort_btn_box")}>
            <button className="sort_btn" onClick={handleClick({ type: "delete" })}>DELETE</button>
            <button className="sort_btn" onClick={handleClick({ type: "read" })}>READ</button>
          </div>
          <div className={cx("AlertContainer__sort", "sort_refresh")}>
            <button className="sort_refresh_btn" onClick={handleClick({ type: "refresh" })}><CachedIcon style={{ fontSize: 30 }} /></button>
          </div>


        </div>
        <AlertList
          list={list}
          checkedId={values.checkEventId}
          handleCheck={handleCheck}
          handleClick={handleClick}
        />
        <div className="AlertContainer__page_btn">
          {/* <>
    {
      pagingData.prevCheck? <KeyboardArrowLeftIcon onClick={handlePage('prev')} style={{ fontSize: 30 }} /> : ''
    }
    </>
    <>
    {
      pagingData.nextCheck? <KeyboardArrowRightIcon onClick={handlePage('next')} style={{ fontSize: 30 }} /> : ''
    }
    </> */}
          <PagingContainer type="message" />
        </div>

      </Styled.AlertContainer>
      <PlainModal
        isOpen={values.modal.open}
        content={modalCont}
        onClick={closeModal}
        dim={false}
      />
    </>

  );
}

const Styled = {
  AlertContainer: styled.div` 
  .AlertContainer__sort_box {
    position: relative;
  }
  .AlertContainer__sort {
    display: inline-block;
    line-height: 42px;

    &.sort_checkbox{
      margin-right: 25px;
    }
  }

  .sort_btn {
    border: none;
    padding: 3px 10px;
    ${font(14, color.white)};
    background: ${color.blue};
    border-radius: 2px;
    margin-right: 5px;
    cursor: pointer;
    transition: all .2s;
    
    &:hover{
      background: ${color.blue_hover};
    }
  }
  .sort_refresh_btn{
    border: none;
    position: absolute;
    right: 0;
    top: 10px;
    color: ${color.blue};
    background: none;
    cursor: pointer;
    transition: all .2s;
    
    &:hover{
      color: ${color.blue_hover};
      animation: 3s rotate infinite linear;
    }
    &:focus{
      outline: none;
    }
    @keyframes rotate{
      from {transform: rotate(0)}
      to{transform: rotate(-360deg)}
    }
  }

  .AlertContainer__page_btn{
      float: right;
      color: ${color.black_font};
      cursor: pointer;
      margin-top: 20px;    
        
    }
  `
}



export default withRouter(AlertContainer);