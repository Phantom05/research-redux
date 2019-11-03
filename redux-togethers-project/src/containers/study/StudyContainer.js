import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import HalfTemplate from 'components/base/template/HalfTemplate';
import PlainBoardTemplate from 'components/base/template/PlainBoardTemplate';
import PlainBoardCommonTemplate from 'components/base/template/PlainBoardCommonTemplate';
import PlainWriteTemplate from 'components/base/template/PlainWriteTemplate';
import { Actions } from 'store/actionCreators';
import { BoardList, BoardWrite, BoardFilter } from 'components/common/Board';


import { ThinScrollHeader } from 'components/common/scrollHeader';

class StudyContainer extends Component {

  componentDidMount() {
    //메인
    //board/sec1/part0/list0
    //board/study/part1/
    //리스트파트들
    //board/sec1/part1/list1?page=1

    Actions.board_get_date_request();
  }
  handleClickWriteBtn = (value) => {
    console.log('handleClickWriteBtn');
    Actions.board_view_mode_change(value)

  }
  handleWrite = (value) => {
    console.log('handleWrite');
    const {authReducer:{profile}} = this.props;
    const {token,username} = profile;
    if(value){
      value.authorSeq = token;
      value.author = username;
    }
    Actions.board_upload_request(value)
  }
  render() {
    const { boardReducer, baseReducer } = this.props;
    const { mainTitle, subTitle, isWriteMode ,boardUpload} = boardReducer;
    const {pending:uploadPending} = boardUpload;
    const { landing } = baseReducer;
    const { match } = this.props;
    if (landing) return null;
    return (
      <HalfTemplate
        header={<ThinScrollHeader title={'강남 / 서초'} />}
        left={
          <Switch>
            <Route path={`${match.path}/list`} component={() => (
              <PlainBoardTemplate title={'강남 / 서초'} type={'코딩 스터디'}>
                <BoardFilter />
                <BoardList />
              </PlainBoardTemplate>
            )
            } />
            <Route path={`${match.path}/write`} component={() => (
              <PlainWriteTemplate>
                <BoardWrite 
                  handleWrite={this.handleWrite}
                  uploadPending={uploadPending}
                />
              </PlainWriteTemplate>
            )
            } />
          </Switch>
        }
        right={<PlainBoardCommonTemplate navigation={'글쓰기 답글'}/>
        }
    />
    );
  }
}

export default connect(
  ({ board, base ,auth}) => ({
    boardReducer: board,
    baseReducer: base,
    authReducer:auth
  })
)(withRouter(StudyContainer));