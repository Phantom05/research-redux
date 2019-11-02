import React, { Component } from 'react';
import {connect} from 'react-redux';
// import WithLogged from 'lib/hoc/WithLogged';


class HomeContainer extends Component {
  render() {
    const {landing} = this.props;
    if (landing) return null;
    return (
      <div>
        {/* <WithLogged isNotLogged/> */}
        Home Container <br/>
        최신 글보기 <br/>
        스터디 최신글 <br/>
        운동  최신글 <br/>
        토크 최신글 <br/>
        금주의 핫이슈 <br/>
      </div>
    );
  }
}

export default connect(
  ({auth,base})=>({
    logged:auth.logged,
    landing:base.landing
  })
)(HomeContainer);