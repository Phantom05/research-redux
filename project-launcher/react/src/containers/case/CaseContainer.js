import React from 'react';
import {CaseInfoTop,CasePanel} from 'components/common/case';

function CaseContainer(props) {
  return (
    <div>
      <CaseInfoTop />
      <CasePanel />
    </div>
  );
}

export default CaseContainer;