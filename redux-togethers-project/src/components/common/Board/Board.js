import React, { Component } from 'react';
import styled from 'styled-components';

const Styled ={
  BoardList:styled.div`
  `,
  Pagination:styled.div`

  `
}
class Board extends Component {
  render() {
    const {page} = this.props;

    let pagiNation =[]
    for(let i = page.startPage; i < page.endPage; i++){
      pagiNation.push(<span key={i}>{i}</span>)
    }

    return (
      <div>
        
        <Styled.BoardList>

        </Styled.BoardList>
        <Styled.Pagination>
          {pagiNation}
        </Styled.Pagination>
      </div>
    );
  }
}

export default Board;