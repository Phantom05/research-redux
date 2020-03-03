import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { color, font,  dotdotdot } from 'styles/__utils';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {PlainTooltip} from 'components/common/tooltip';

/**
 * onClick
 * id
  company
  address
  type
 * @param {*} props 
 */
function PartnersListItem(props) {
  const {option} = props;
  const handleClick = () => {
    props.onClick && props.onClick({ ...props,key: props.id })
  }

  const handleInnerClick = e =>{
    e.stopPropagation();
    props.onClick && props.onClick({ ...props,key: props.id, selectOption: 'onlySelect' })
  } 

  const partnerTypeArr = Object.keys(props.type) 
  const partnerType = partnerTypeArr.length ?
   partnerTypeArr.filter(i =>props.type[i] ? i : false)
    .map(i => {
      if(i === 'clinic'){
            return 'Clinic';
          }else if(i === 'milling'){
            return 'Milling';
          }else if(i === 'lab'){
            return 'Lab';
          }
    }).join(', ')
  : '-';
  // const partnerType = partnerTypeArr.length ? 
  // partnerTypeArr.filter(i => props.type[i] ? i : false).map(i => {
  //   if(i === 'clinic'){
  //     return 'C';
  //   }else if(i === 'milling'){
  //     return 'M';
  //   }else if(i === 'lab'){
  //     return 'L';
  //   }
  // }).join(', ')
  // : '-';


  return (
    <Styled.PartnersListItem >
      <div className="list__row" onClick={handleClick}>
      <Grid container justify="space-between">
        <Grid item xs={3} className="list__box_item td">
          <span className="list__box_tx tx">
            {option === 'my'? props.userCode : props.code}
          </span>
        </Grid>
        <Grid item xs={3} className="list__box_item td">
          <span className="list__box_tx tx">
            <p>
            {option === 'my'? props.companyName : props.company}
            </p>
          </span>
        </Grid>
        <Grid item xs={3} className="list__box_item td">
          <span className="list__box_tx tx">
            <PlainTooltip
              title={props.address}
              placement="bottom"
              isActive={true}
              interactive={false}
            >
              <p>
                {props.address}
              </p>
            </PlainTooltip>
          </span>
        </Grid>
        <Grid item xs={2} className="list__box_item td">
          <span className="list__box_tx tx">
            {partnerType}
          </span>
        </Grid>
        <Grid item xs={1} className="list__box_item td">
          <span className="list__box_tx tx">
            <FormControlLabel
            className="radio_select"
            onClick={handleInnerClick}
              value={props.id}
              color="primary"
              name="partnersItem"
              control={<Radio color="default" size="small" />}
            />
          </span>
        </Grid>
      </Grid>
      </div>
    </Styled.PartnersListItem>
  )
}

const Styled ={
  PartnersListItem:styled.div`
    .list__row{
      border-bottom:1px solid ${color.gray_border2};
      cursor: pointer;

      &:hover{
        background:#ececec;
      }
    }
    /* .list__box_item{
      position:relative;
      height:40px;
      border-right:1px solid ${color.grat_border6};
      text-align:center;
      
      &:last-child{
        border-right:0;
      }
      &.th{
        background:${color.gray_bg1};
      }
      &.td{

      }
    } */
    .list__box_tx{
      & .radio_select{
        margin: 0;
      }
      &.tx{
        padding:0 5px;
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        ${font(14, color.black_font)};
        ${dotdotdot};
        width:100%;
      }
      &.bold{
        font-weight:600;
      }

      & p{
        ${dotdotdot};
      }
    }
  `
}

export default PartnersListItem;
