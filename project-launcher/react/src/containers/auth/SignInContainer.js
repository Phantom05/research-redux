import React from 'react';
import {AuthTemplate} from 'components/base/template';
import {SignInForm} from 'components/common/form';
import {PlainFooter} from 'components/common/footer';

function SignInContainer(props) {
  return (
    <AuthTemplate 
      children={<SignInForm />}
      footer={<PlainFooter />}
    />
  );
}

export default SignInContainer;