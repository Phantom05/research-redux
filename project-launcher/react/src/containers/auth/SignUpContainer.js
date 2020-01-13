import React from 'react';
import {AuthTemplate} from 'components/base/template';
import {SignUpForm} from 'components/common/form';

function SignUpContainer(props) {
  return (
    <AuthTemplate
      children={<SignUpForm />}
    />
  );
}

export default SignUpContainer;