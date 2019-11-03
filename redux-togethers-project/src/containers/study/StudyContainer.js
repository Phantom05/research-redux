import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import HalfTemplate from 'components/base/template/HalfTemplate';
import PlainBoardTemplate from 'components/base/template/PlainBoardTemplate';
import PlainBoardCreateTemplate from 'components/base/template/PlainBoardCreateTemplate';
import PlainWriteTemplate from 'components/base/template/PlainWriteTemplate';
import {Actions} from 'store/actionCreators';
import {BoardList} from 'components/common/Board';

import {ThinScrollHeader} from 'components/common/scrollHeader';

class StudyContainer extends Component {

  componentDidMount(){
    //메인
    //board/sec1/part0/list0
    //board/study/part1/
    //리스트파트들
    //board/sec1/part1/list1?page=1

    Actions.board_get_date_request();
  }
  handleClickWriteBtn = (value) =>{
    console.log('handleClickWriteBtn');
    Actions.board_view_mode_change(value)
    
  }
  render() {
    const {boardReducer,baseReducer} = this.props;
    const {mainTitle,subTitle,isWriteMode} = boardReducer;
    const {landing} = baseReducer;
    console.log(isWriteMode,'isWriteMode');
    if(landing) return null;
    return (
      <div>
        <HalfTemplate 
          header={<ThinScrollHeader title={'강남 / 서초'}/>}
          left={
            isWriteMode 
            ?<PlainWriteTemplate 
              handleClickWriteBtn={this.handleClickWriteBtn}
            /> 
            :<PlainBoardTemplate 
              title={'강남 / 서초'}
              main={<BoardList/>}
              type={'코딩 스터디'}
            />
          }
          right={
            <PlainBoardCreateTemplate 
              navigation={'글쓰기 답글'}
              handleClickWriteBtn={this.handleClickWriteBtn}
            />
          }
        />
      </div>
    );
  }
}

export default connect(
  ({board,base})=>({
    boardReducer:board,
    baseReducer:base
  })
)(withRouter(StudyContainer));