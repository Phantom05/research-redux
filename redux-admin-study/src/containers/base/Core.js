import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { cookie, keys } from 'utils';
import { Actions } from 'store/actionCreators';


class Core extends Component {

  updateLogged =() =>{
    const {isAutheticated} = this.props;
    const token = cookie.get(keys.user);
  
    if(token && !isAutheticated){
      console.log('토큰은 있는데 리듀서 새로고침해서 isAutheticated가 없을떄');
      Actions.auth_token_request(token);
    }
  }
  componentDidMount(){
    const {updateLogged} = this;
    updateLogged()
  }

  render() {
    console.log('>>> Core Component');
    return <></>
  }
}

export default connect(
  ({auth})=>({
    pending: auth.pending,
    response: auth.response,
    isAutheticated:auth.isAutheticated,
    authLoginEmail:auth.authLoginEmail,
    authLoginRemember:auth.authLoginRemember,
    profile:auth.profile
  })
)(withRouter(Core));