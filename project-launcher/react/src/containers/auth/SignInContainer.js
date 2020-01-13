import React from 'react';
import {AuthTemplate} from 'components/base/template';
import {SignInForm} from 'components/common/form';

function SignInContainer(props) {
  return (
    <AuthTemplate 
      children={<SignInForm />}
    />
  );
}

export default SignInContainer;