import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useImmer} from 'use-immer';
// import {useDidUpdateEffect} from 'lib/utils';

import {OptionPage} from 'components/common/info';
import { PlainModal, ModalWorkSpaceChange } from 'components/common/modal';

import {
  // WORKSPACE_GET_SAGAS,
  WORKSPACE_SET_SAGAS
} from 'store/actions';

function OptionContainer(props) {
  const initValue = {
    workSpace: 'test/default/path',
    modal: {
      current: null,
      workSpace: false,
    }
  }
  const [value, setValue] = useImmer(initValue);
  const {
    mypage: mypageReducer
  } = useSelector(state => state);

  const {
    workSpace,
    workSpaceSet
  } = mypageReducer;

  const handleClick = config => e => {
    const {
      type,
    } = config;

    if(type === 'workspaceModal'){
      openModal('workSpace');
    }

    if(type === 'updateWorkSpace'){
      console.log("update workspace");
      openModal('workSpace');
      // e 에는 target value가 들어있음. 
      WORKSPACE_SET_SAGAS();
    }
  }

  const openModal = value => {
    console.log("open modal", value);
    if(value === 'workSpace'){
      setValue(draft => {
        draft.modal.workSpace = !draft.modal.workSpace;
        draft.modal.current = 'workSpace';
      })
    }
  }

  const typeModalCurrent = value.modal.current;
  const typeModalBool = !!value.modal[typeModalCurrent];
  const fnOpenModal = ()=>openModal( typeModalCurrent);

  const modalObj={
    'workSpace': <ModalWorkSpaceChange handleClick={handleClick}/>,
  };
  const modalContent = modalObj[typeModalCurrent];

  useEffect(() => {
    // 아직 api 나오지 않음.2020.02.27
      // WORKSPACE_GET_SAGAS();
  },[]);

  useEffect(() => {
    if(workSpace.success){
      setValue(draft => {
        draft.workSpace = workSpace.path;
      });
    }
    if(workSpaceSet.success){
    // 아직 api 나오지 않음.2020.02.27
      // WORKSPACE_GET_SAGAS();
      // WORKSPACE_SET_SAGAS.init();
    }
    
  },[workSpace.success, workSpaceSet.success]);

  return (
    <div>
      {true?
      // {workSpace.success?
      <OptionPage 
        handleClick={handleClick}
        workSpace={value.workSpace}
      />
      :
      ''
      }
      <PlainModal
        isOpen={typeModalBool}
        content={modalContent}
        onClick={fnOpenModal}
        dim={true}
        width={'360px'}
      />
    </div>
  );
}

export default OptionContainer;