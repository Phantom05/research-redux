import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { cookie, keys } from 'utils';
import { Actions } from 'store/actionCreators';


class Core extends Component {


  initializeUserInfo = async () => {
    const token = cookie.get(keys.user); // 로그인 정보를 로컬 스토리지에서 가져옵니다.
    if (!token) { // 새로고침하면 reducer는 무조건 날라가기때문에 isAuthicated는 볼것도 없음. 스토리지만 확인해주면됨
      console.log('Not Userinfo, => Landing status => false');
      Actions.base_landing_view(false);
      // 로그인 정보가 없다면 랜딩을 풀고 여기서 멈춥니다.
    }else{
      try {
        console.log('>> Login related processing.');
        Actions.auth_token_request(token); /// 토큰을 넣어서 보냄 로그인 정보를 가져오기위함.
        
      } catch (e) {
        console.log('catch');
        cookie.remove(keys.user); //토큰 갱신이 만료됬을때.
        window.location.href = '/login'
      }
    }

    console.log(token);
  }
  componentDidMount() {
    const {  initializeUserInfo } = this;
    initializeUserInfo()
    // updateLogged();
  }
  componentWillUnmount() {
    console.log('core close');
  }

  render() {
    // console.log('** Core Component Render');
    const { landing } = this.props;
    // console.log(landing,'Core landing');
    return <></>
  }
}

export default connect(
  ({ auth, base }) => ({
    pending: auth.autheticate.pending,
    isAutheticated: auth.autheticate.isAutheticated,
    authLoginEmail: auth.authLoginEmail,
    authLoginRemember: auth.authLoginRemember,
    profile: auth.profile,
    landing: base.landing
  })
)(withRouter(Core));