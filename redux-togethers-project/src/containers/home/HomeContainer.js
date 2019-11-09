import React, { Component } from 'react';
import {connect} from 'react-redux';
// import WithLogged from 'lib/hoc/WithLogged';
import Board from 'components/common/Board/Board';
import {Actions} from 'store/actionCreators';


class HomeContainer extends Component {
  handleClickPage =(value) =>{
    console.log(`handleClickPage`);
    console.log(value);
    const {page} = value;
    Actions.board_get_list_request({type:'study',page:page})
  }
  componentDidMount(){
    Actions.board_get_list_request({type:'study',page:1})
  }
  render() {
    const {
      landing,
      boardReducer
    } = this.props;
    if (landing) return null;
    const {boardList:{list}} = boardReducer;
    const boardList = list.map(info=>{
      return {
        title:{
          value:info.title,
          link:`/${info.id}`
        },
        author:info.author
      }
    });
    const boardInfo = {};
    boardInfo.label = ['Title','Author']
    boardInfo.list = boardList;
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
        numbering={true}
        page={boardReducer.pagination}
        board={boardInfo}
        onClick={this.handleClickPage}
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