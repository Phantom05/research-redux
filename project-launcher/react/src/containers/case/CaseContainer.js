import React,{useState} from 'react';
import {CaseInfoTop,CasePanel} from 'components/common/case';
import {useImmer} from 'use-immer';

function CaseContainer(props) {
  const [value,setValue] = useImmer({
    caseId:'20200120_clinic_Alice',
    partner:'새하얀치과 기공소'
  });
  const {caseId,partner} = value;


  return (
    <div>
      <CaseInfoTop 
        caseId={caseId}
        partner={partner}
      />
      <CasePanel 
        type="create"
      />
    </div>
  );
}

export default CaseContainer;