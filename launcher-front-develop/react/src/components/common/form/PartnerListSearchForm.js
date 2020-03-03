import React, { useEffect,useRef } from 'react';
import styled from 'styled-components';
import { color, font, buttonBlue, dotdotdot } from 'styles/__utils';
import { useImmer } from 'use-immer';
import Button from '@material-ui/core/Button';
import { PlainModal, ModalPartner } from 'components/common/modal';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { PartnersList } from 'components/common/listing';
import { PartnersSearch } from 'components/common/search';
import { useSelector } from 'react-redux';
import {
  LISTING_PARTNERS_SEARCH_SAGAS,
  LISTING_MY_PARTNERS_SAGAS,
  // INFO_PARTNERS_MODAL_INFO_SAGAS,
  INFO_INFORMATION_SAGAS,
  // LISTING_PARTNERS_INFO_SAGAS,
  // LISTING_PARTNERS_INFO
} from 'store/actions';
import InfiniteScroll from "react-infinite-scroll-component";

// import { makeStyles } from '@material-ui/core/styles';
// import { LoadingCircle } from 'components/base/loading'
// import { InfiniteScroll } from 'components/base/scroll';

/**
 * 
 * @param {*} props 
 * {
 *  selectCompany function //select change value function
 *  onSubmit function // inner submit button function
 *  option string ['my'] // my partner list
 *  styleConf object { searchDivtype string ['row'] , radioExist: boolean, buttonExist: boolean, tableHeight: int }
 *  selectOption string ['onlySelect'] // row item 클릭시 select만 선택, 없을시 info popup
 * } 
 */

function PartnerListSearchForm(props) {
  const {
    auth: authReducer,
    listing: listingReducer,
    mypage: mypageReducer,
    info: infoReducer,
  } = useSelector(state => state);
  const infinoteRef = useRef();
  const {myinfo} = mypageReducer;
  const { partners, myPartners, partnersAdd, partnersType:{list:typeList} } = listingReducer;
  const { list: partnersList } = partners;
  const { list: myPartnerList} = myPartners;
  let hasMore = false, listMax = 100;
  let loadConfig = {};

  if(props.option === 'my'){
    if (myPartnerList.length > listMax) hasMore = true;
  // 무한 스크롤시 요청 data form
  loadConfig = {
      // userCode: "20Jan31-0000",
      userCode: authReducer.signIn.profile.userCode,
      page: myPartners.page,
      codeType : myPartners.codeType,
      type : myPartners.type,
      keyword : myPartners.keyword,
    }
  }else{
    if (partnersList.length > listMax) hasMore = true;
  // 무한 스크롤시 요청 data form
  loadConfig = {
      // userCode: "20Jan31-0000",
      userCode: authReducer.signIn.profile.userCode,
      page: partners.page,
      codeType : partners.codeType,
      type : partners.type,
      keyword : partners.keyword,
    }
  }


  const [values, setValues] = useImmer({
    searchCheckbox: {
      value: "1"
    },
    companySelected: {
      value: authReducer.signIn.profile.pCode? authReducer.signIn.profile.pCode : ''
    },
    partnerList:[],
    partnerModal: false,
    partnerModalInfo: null,
  });

  const { searchCheckbox, companySelected } = values;
  const styleConf = props.styleConf ? props.styleConf : null;

  const handleChange = (value) => e => {
    const targetValue = e.target.value;
    // 고유번호, 업체명 셀렉
    if (value === 'searchCheckbox') {
      setValues(draft => {
        draft.searchCheckbox.value = targetValue;
      })
    }
  };
  const handleModal = config => {
    const {
      type,
      value
    } = config;
    if(type === 'modalGetInfo'){
      console.log("modal get info", value);
      
      const conf = {
        userCode: value,
      }
      INFO_INFORMATION_SAGAS(conf);
    }else if(type === 'dim'){
      setValues(draft => {
        draft.partnerModal = false;
      });
    }
  }

  const handleClick = config => e => {
    const { type } = config;
    if (type === 'selected') {
      if (e.component === "PartnersList") {
        console.log("SDFSDFSDFSDF", e);
        setValues(draft => {
          draft.companySelected = e;
        })
      }
    }

    if (type === 'change') {
      props.onSubmit && props.onSubmit(values);
    }
  };


  // const loadConfig = {
  //   userCode: authReducer.signIn.profile.userCode,
  //   page: partners.page
  // }


  // Partners List Search Submit
  const onSubmit = (config) => {
    let searchConfig = {
      // userCode: "20Jan31-0000",
    userCode: authReducer.signIn.profile.userCode,
      page: 1,
      codeType : 1,
      type : config.selectedType,
      keyword : config.keyword,
      first:true
    }
    infinoteRef.current.el.scrollTo(0,0);
    if(props.option === 'my'){
      LISTING_MY_PARTNERS_SAGAS(searchConfig);
    }else{
      searchConfig.codeType = values.searchCheckbox.value;
      LISTING_PARTNERS_SEARCH_SAGAS(searchConfig);
    }
  };


  useEffect(() => {
    if(mypageReducer.myinfo.success){
      setValues(draft => {
        draft.partnerModal = true;
        draft.partnerModalInfo = myinfo.info;
      });
    }
  }, [mypageReducer.myinfo.success]);

  useEffect(() => {
    if(partnersAdd.success){
      const searchConf = {
        // userCode: "20Jan31-0000",
      userCode: authReducer.signIn.profile.userCode,
        keyword: '',
        codeType: 1,
        type: 0,
        page: 1,
        first: true
      }
      LISTING_PARTNERS_SEARCH_SAGAS(searchConf);
    }
  },[partnersAdd.success]);


  useEffect(() => {
    let initConfig = {
      // userCode: "20Jan31-0000",
      userCode: authReducer.signIn.profile.userCode,
      page: 1,
      codeType : 1,
      type : 0,
      keyword : "",
      first: true
    }
    if(props.option === 'my'){
      LISTING_MY_PARTNERS_SAGAS(initConfig);
    }else{
      LISTING_PARTNERS_SEARCH_SAGAS(initConfig);
    }
    setValues(draft => {
      draft.partnerModal = false;
    });
  }, []);

  useEffect(() => {
    if(values.companySelected){
      props.selectCompany && props.selectCompany(values.companySelected);
    }
  }, [values.companySelected])
  

  return (
    <Styled.PartnerListSearchForm>
        <div className={`partenrs__row ${props.styleConf && props.styleConf.searchDivtype}`}>
        {
        styleConf && !styleConf.radioExist?
        null
        :
          <RadioGroup 
            aria-label="position"
            name="position"
            value={searchCheckbox.value}
            onChange={handleChange(`searchCheckbox`)} row>
            <FormControlLabel
              value="1"
              control={<Radio color="default" size="small" />}
              label={<span className="signup__input public text">고유번호</span>}
              labelPlacement="end"
            />
            <FormControlLabel
              value="2"
              control={<Radio color="default" size="small" />}
              label={<span className="signup__input public text">업체명</span>}
              labelPlacement="end"
            />
          </RadioGroup>
          }
          {/* <PartnersSearch
            onSubmit={onSubmit}
          /> */}
        </div>

      <div className={`partenrs__row ${props.styleConf && props.styleConf.searchDivtype}`}>
        <PartnersSearch
          onSubmit={onSubmit}
        />
        
      </div>

      <div className="partenrs__row">
        <InfiniteScroll
          {...props}
          ref={infinoteRef}
          next={() => props.option==='my'? LISTING_MY_PARTNERS_SAGAS(loadConfig): LISTING_PARTNERS_SEARCH_SAGAS(loadConfig) }
          height={styleConf && styleConf.tableHeihgt ? styleConf.tableHeihgt: 400}
          dataLength={props.option==='my'? myPartnerList.length : partnersList.length}
          hasMore={hasMore}
          loader={
            <div className="align__center">
              <p className="cassload__loading">
                Loading..
            </p>
            </div>
          }
          endMessage={
              <div className="align__center">
                <p className="cassload__info">
                  {
                    props.option==='my'?
                    (
                      myPartnerList.length?
                      (
                        myPartnerList.length <= listMax?
                        ''
                        :
                        `리스트는 ${listMax} 까지만 보여집니다.`
                      )
                      :
                      `리스트가 없습니다.`
                    )
                    :
                    (
                      partnersList.length?
                      (
                        partnersList.length <= listMax?
                        ''
                        :
                        `리스트는 ${listMax} 까지만 보여집니다.`
                      )
                      :
                      `리스트가 없습니다.`
                    )
                  }
                  
                </p>
              </div>
          }
        >
        <PartnersList
          list={props.option === 'my'? myPartnerList : partnersList}
          info={companySelected}
          typeList={typeList}
          option={props.option}
          selectOption={props.selectOption}
          pCode={authReducer.signIn.profile.pCode}
          onClick={(result) => handleClick({ type: "selected" })(result)}
          handleModal={handleModal}
        />
        </InfiniteScroll>
        
        <PlainModal 
          isOpen={!!values.partnerModal}
          onClick={() => handleModal({type: 'dim'})}
          content={<ModalPartner 
                    modalInfo={values.partnerModalInfo}
                    />}
          width={700}
        />
      </div>

      {
        styleConf && !styleConf.buttonExist?
        null
        :
        <div className="partenrs__row">
          <div className="list__btn_box">
            <Button
              onClick={handleClick({ type: "change" })}
              variant="contained"
              className="partnerss__btn"
              component="span">CHANGE</Button>
          </div>
        </div>
      }

    </Styled.PartnerListSearchForm>
  );
}

const Styled = {
  PartnerListSearchForm: styled.div`
    margin-top: 10px;
    .partenrs__row{
      display: flex;
      flex-flow: column nowrap;
      margin-bottom:10px;
    }

    & .row{
      display: inline-block;
      vertical-align: top;

      &:nth-of-type(1){
        width: 234px;
      }
      &:nth-of-type(2){
        width: calc(100% - 260px);

      }
    }

    .partenrs__column{
      display: flex;
      margin-bottom: 10px;
    }
    .list__control .MuiFormGroup-root{
      flex-wrap:nowrap;
    }

    .list__control{
      /* height:400px;
      overflow:auto; */
    }

    .MuiSelect-outlined.MuiSelect-outlined{
      padding:10px ;
    }
    .partnerss__btn{
      ${buttonBlue};
      box-shadow:none;
      &:hover{
        box-shadow:none;
      }
    }
    .list__box_tx{
      &.tx{
        padding:0 5px;
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        ${font(14, color.black_font)};
        ${dotdotdot};
        width:100%;
      }
      &.bold{
        font-weight:600;
      }
    }
    .list__box_item{
      position:relative;
      height:40px;
      border-right:1px solid ${color.grat_border6};
      text-align:center;
      &:last-child{
        border-right:0;
      }
      &.th{
        background:${color.gray_bg1};
      }
      &.td{

      }
    }
    .list__btn_box{
      /* border-top:1px solid ${color.grat_border6}; */
      text-align:right;
      padding-top:15px;
    }
    .cassload__info,.cassload__loading{
      ${font(14)};
      text-align:center;
      margin-top:10px;
    }
    .columnWide{
      color: blue;
    }
  `
}

export default PartnerListSearchForm;



{/* {isSearchSaga ?
  <InfiniteScroll
  type={1}
    maxDataLength={100}
    dataLength={partnersList.length}
    next={()=>LISTING_PARTNERS_SEARCH_SAGAS(loadConfig)}
    unMount={LISTING_PARTNERS_INFO.init}
    height={425}
  >
    <PartnersList
      list={partnersList}
      info={companySelected}
      onClick={(result) => handleClick({ type: "selected" })(result)}
    />
    <br />
  </InfiniteScroll>
  :
  <InfiniteScroll
    type={2}
    maxDataLength={100}
    dataLength={partnersList.length}
    next={()=> LISTING_PARTNERS_INFO_SAGAS(loadConfig)}
    unMount={LISTING_PARTNERS_INFO.init}
    height={425}
  >
    <PartnersList
      list={partnersList}
      info={companySelected}
      onClick={(result) => handleClick({ type: "selected" })(result)}
    />
    <br />
  </InfiniteScroll>
} */}