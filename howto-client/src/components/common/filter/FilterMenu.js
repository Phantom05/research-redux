import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import cx from 'classnames';
import { floatClear, font, color } from 'styles/utils';

const Styled ={
  FilterMenu:styled.div`
  ${floatClear};
  margin-bottom:20px;
  .filter__item{
    float:left;
    margin-right:15px;
  }
  .filter__item_an{
    display:inline-block;
    padding:5px;
    text-decoration:none;
    ${font};
    color:${color.greenText};
    font-weight:bold;
    &:hover{
      text-decoration:underline;
    }
  }
  `
}
class FilterMenu extends Component {

  render() {
    const {list} = this.props;
    return (
      <Styled.FilterMenu>
        {list.map((info,idx)=>(
          <div key={idx} className={cx('filter__item')}>
            <Link to="/cook" className={cx('filter__item_an')}>{info}</Link>
          </div>
        ))}
      </Styled.FilterMenu>
    )
  }
}

export default FilterMenu;