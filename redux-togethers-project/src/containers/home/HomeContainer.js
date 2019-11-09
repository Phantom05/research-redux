import React, { Component } from 'react';
import {connect} from 'react-redux';
// import WithLogged from 'lib/hoc/WithLogged';
import Board from 'components/common/Board/Board';


class HomeContainer extends Component {
  render() {
    const pageInfo={
      page:1,
      startPage:1,
      endPage:10,
    }
    const {
      landing,
      boardReducer
    } = this.props;
    if (landing) return null;
    return (
      <div>
        {/* <WithLogged isNotLogged/> */}
        {/* Home Container <br/>
        최신 글보기 <br/>
        스터디 최신글 <br/>
        운동  최신글 <br/>
        토크 최신글 <br/>
        금주의 핫이슈 <br/> */}
      <Board 
        page={pageInfo}
      />

      </div>
    );
  }
}

export default connect(
  ({auth,base,board})=>({
    logged:auth.logged,
    landing:base.landing,
    boardReducer:board
  })
)(HomeContainer);