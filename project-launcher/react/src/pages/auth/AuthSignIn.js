import React from 'react';
import {SignInContainer} from 'containers/auth';
import {AuthTemplate} from 'components/base/template';
import {FooterContainer} from 'containers/footer';

function AuthSignIn(props) {
  return (
    <AuthTemplate  footer={<FooterContainer />} >
      <SignInContainer/>
    </AuthTemplate>
  );
}

export default AuthSignIn;