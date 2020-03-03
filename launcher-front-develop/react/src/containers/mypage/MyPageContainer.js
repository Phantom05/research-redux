import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useImmer} from 'use-immer';
import {regEmail} from 'lib/library';
import {useDidUpdateEffect} from 'lib/utils';
import { PlainModal,ModalComplete, ModalWorkSpaceChange } from 'components/common/modal';
import {ModalSendVerifyCode} from 'components/common/modal';

import {TabBar} from 'components/common/tab';
import {
  // LISTING_COUNTRY_SAGAS,
  LISTING_LOCATION_SAGAS,
  INFO_INFORMATION_SAGAS,
  INFO_PARTNERS_SAGAS, //파트너 정보
  // LISTING_PARTNERS_INFO_SAGAS,
  LISTING_PARTNERS_SEARCH_SAGAS,
  LISTING_PARTNERS_MY_ADD_SAGAS, //파트너 추가
  LISTING_PARTNERS_MY_DEFAULT_ADD_SAGAS, // 기본 파트너 설정
  INFO_UPDATE_MY_OPTION_SAGAS,
  // AUTH_VERIFY_EMAIL_SAGAS,
  // AUTH_VERIFY_CODE_SAGAS,

} from 'store/actions';

function MyPageContainer (props) {
  const {auth: signReducer, mypage: mypageReducer, listing: listingReducer} = useSelector(state => state);
  const [values, setValues] = useImmer({
    pending: {
      getInfoResult: false,
      getPartnerResult: false,
    },
    myinfo: {},
    viewModify: false,
    infoPartners: {},
    partner:{
      title:'',
      id:''
    },
    country: {
      current: "",
      list: []
    },
    city: {
      current: "",
      list: []
    },
    modal: {
      current:null,
      update: false,
      disUpdate: false,
      add: false,
      option: false,
      needData: false,
      workSpace: false,
    }
  });

  const {
    // modal,
    country,
    city
  } = values;

  const {
    myinfo,
    infoPartners,
  } = mypageReducer;

  const {
    partners,
    partnersAdd
  } = listingReducer;

  let {
    userCode
  } = signReducer.signIn.profile;

  // userCode = '20Jan31-0000';
  
  const dataConfig = {
    "jsonType"  : "mypage.req.json" ,
    "userCode"  : userCode
  }
  const handleSubmit = value =>config=>{
    if(value === 'changePartner'){
      const changeInfo = config.companySelected;
      setValues(draft=>{
        draft.partner.title =changeInfo.company;
        draft.partner.id = changeInfo.value;
      });
    }
  }

 
  const handleClick = config => e=>{
    
    const {
      type,
      option,
      value,
      view
    } = config;
    
    const searchConf = {
      userCode: userCode,
      keyword: '',
      codeType: 1,
      type: 0,
      page: 1,
      first: true,
    }
    if(type==='viewModify'){
      if(view){
        setValues(draft => {
          draft.viewModify = view ==='true' ? true : false;
          draft.modal.update = false;
          draft.modal.current = null;
        });
      }else{
        setValues(draft => {
          draft.viewModify = !values.viewModify;
          draft.modal.update = false;
          draft.modal.current = null;
        })
      }
    }
    
    if(type==='getPartner'){
      LISTING_PARTNERS_SEARCH_SAGAS(searchConf);
    }

    if(type==='addPartner'){
      let payload;
      if(value){
        payload = {
          userCode: userCode,
          partnerCode: value,
        }
        if(option === 'default'){
          LISTING_PARTNERS_MY_DEFAULT_ADD_SAGAS(payload);
        }else{
          LISTING_PARTNERS_MY_ADD_SAGAS(payload);
        }
      }else{
        console.log("Do to select partner list");
      }
      
    }
  }

  const onChange = (config) => {
    const { type, value } = config;
    if (type === 'country') {
      LISTING_LOCATION_SAGAS(value);
      setValues(draft => {
        draft.country.current = value;
        draft.city.current ="";
      })
    }
    if (type === 'city') {
      setValues(draft => {
        draft.city.current = value;
      })
    }
  };

  useEffect(() => {
    INFO_INFORMATION_SAGAS(dataConfig);
  },[]);

  useDidUpdateEffect(() =>{
    console.log("update render", myinfo.update.success);
    if(myinfo.update.success){
      openModal('update');
    }
    if(myinfo.update.failure){
      openModal('disUpdate');
    }
    INFO_INFORMATION_SAGAS(dataConfig);
    // LISTING_COUNTRY_SAGAS();
  }, [myinfo.update]);

  useDidUpdateEffect(() =>{
    console.log("list add render", partnersAdd.success);
    if(partnersAdd.success){
      openModal('add');
    }
  }, [partnersAdd.success]);
  

  useEffect(()=>{
    setValues(draft=>{
      draft.country.list = listingReducer.country;
      draft.city.list = listingReducer.location;
    })
  },[listingReducer, setValues]);


  // Myinfo data 파싱
  useEffect(() => {
    setValues(draft => {
        draft.pending.getInfoResult = mypageReducer.myinfo.pending;
        draft.myinfo = myinfo.info;
    });
}, [values.getInfoResult, mypageReducer.myinfo]);

// My partner data 파싱
useEffect(() => {
  // setValues(draft => {
  //   draft.pending.getPartnerResult = mypageReducer.infoPartners.pending;
  //     draft.infoPartners = {
  //       myCode: infoPartners.partner.myCode,
  //       company: infoPartners.partner.company,
  //       manager: infoPartners.partner.manager,
  //       email: infoPartners.partner.email,
  //       regionName: `${infoPartners.partner.country && infoPartners.partner.state ? `${infoPartners.partner.country} / ${infoPartners.partner.state}` : ''}`,
  //       type: `${Object.keys(infoPartners.partner.type).map(i => {
  //         return infoPartners.partner.type[i] ? `${i.toUpperCase()}` : '';
  //       }).join(' ')}`,
  //       phone: infoPartners.partner.phone,
  //       address: infoPartners.partner.address,
  //     }
  // });
}, [values.getPartnerResult, mypageReducer.infoPartners]);

const openModal = value => {
  console.log("open modal", value);
  if(value === 'update'){
    setValues(draft=>{
      draft.modal.update = !draft.modal.update;
      draft.modal.current = 'update';
    })
  }
  if(value === 'disUpdate'){
    setValues(draft => {
      draft.modal.disUpdate = !draft.modal.disUpdate;
      draft.modal.current = 'disUpdate';
    })
  }
  if(value === 'add'){
    setValues(draft=>{
      draft.modal.add = !draft.modal.add;
      draft.modal.current = 'add';
    })
  }
  if(value === 'option'){
    setValues(draft=>{
      draft.modal.option = !draft.modal.option;
      draft.modal.current = 'option';
    })
  }
  if(value === 'needData'){
    setValues(draft => {
      draft.modal.needData = !draft.modal.needData;
      draft.modal.current = 'needData';
    })
  }
  if(value === 'failProfile'){
    setValues(draft => {
      draft.modal.failProfile = !draft.modal.failProfile;
      draft.modal.current = 'failProfile';
    })
  }
}

const typeModalCurrent = values.modal.current;
const typeModalBool = !!values.modal[typeModalCurrent];
const fnOpenModal = ()=>openModal( typeModalCurrent);

const modalObj={
  'update':<ModalComplete onClick={fnOpenModal} onClick={handleClick({type: 'viewModify'})} children="업데이트 성공"/>,
  'add':<ModalComplete onClick={fnOpenModal} title="업체 등록" children="업체를 등록했습니다."/>,
  'option':<ModalComplete onClick={fnOpenModal} title="옵션 변경" children="옵션을 변경했습니다."/>,
  'disUpdate': <ModalComplete onClick={fnOpenModal} title="업데이트 실패" children="업데이트를 실패했습니다."/>,
  'needData': <ModalComplete onClick={fnOpenModal} title="업데이트 실패" children="값을 모두 채워 주세요"/>,
  'failProfile': <ModalComplete onClick={fnOpenModal} title="업데이트 실패" children="프로필 업로드에 실패했습니다."/>,
};
const modalContent = modalObj[typeModalCurrent];


  return (
    <div>
      <TabBar 
        initData={values}
        pending={values.pending}
        countryData={country}
        cityData={city}
        onChange={onChange}
        onSubmit={handleSubmit}
        partnerList={listingReducer.partners}
        handleClick={handleClick}
        userCode={userCode}
        openModal={openModal}
      /> 

      <PlainModal
        isOpen={typeModalBool}
        content={modalContent}
        onClick={fnOpenModal}
        dim={false}
      />
    </div>
  );
}

export default MyPageContainer ;