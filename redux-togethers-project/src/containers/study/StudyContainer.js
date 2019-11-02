import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import HalfTemplate from 'components/base/template/HalfTemplate';
import PlainBoardTemplate from 'components/base/template/PlainBoardTemplate';
import {Actions} from 'store/actionCreators';


class StudyContainer extends Component {
  state={

  }

  componentDidMount(){
    //메인
    //board/sec1/part0/list0
    //리스트파트들
    //board/sec1/part1/list1?page=1

    Actions.board_get_date_request()
  }
  render() {
    const {board} = this.props;
    const {mainTitle,subTitle} = board;
    return (
      <div>
        <HalfTemplate 
          left={
            <PlainBoardTemplate 
              title={mainTitle}
              main={subTitle}
            />
          }
          right={'Hello, React'}
        />
      </div>
    );
  }
}

export default connect(
  ({board})=>({
    board:board
  })
)(withRouter(StudyContainer));