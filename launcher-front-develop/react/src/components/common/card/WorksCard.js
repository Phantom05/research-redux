import React,{useEffect} from 'react';
import styled from 'styled-components';
import { font, color } from 'styles/__utils';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import cx from 'classnames';
import { useImmer } from 'use-immer';
import { useDidUpdateEffect } from 'lib/utils';
import moment from 'moment';
import {Actions} from 'store/actionCreators';
/**
 * 
 * checked
 * onClick
 * info={
 *  caseId
    patient
    sender
    receiver
    dueDate
 * } 
 * @param {*} props object
 */

const initialState={
  key: false,
  checked: false
}
function WorksCard(props) {
  const { onClick, type, info,checked } = props;
  const [values, setValues] = useImmer(initialState);

  const handleClick = () => {
    Actions.info_works_cloud_reset();
    onClick && onClick(info);
  }

  useDidUpdateEffect(() => {
    setValues(draft => {
      draft.checked = checked;
    });
  }, [checked]);


  
  const isListCard = type === 'list';
  const RadioContent = isListCard
    ? <FormControlLabel
      value={info && info.id}
      control={
        <Radio
          className={cx("WorksCard__check_box", { "list": isListCard })}
          name="workCard"
          size="small"
          color="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      }
    />
    : <Radio
      checked={values.checked}
      className={cx("WorksCard__check_box", { "list": isListCard })}
      // onClick={handleClick}
      name="workCard"
      size="small"
      color="primary"
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />;

  const strDudate = info.dueDate && moment.unix(info.dueDate).format('YYYY-MM-DD');
  return (
    <Styled.WorksCard labelText={props.labelText} labelColor={props.labelColor} onClick={() => { }}>
      <Grid 
        container 
        className="WorksCard__row"
        onClick={handleClick} 
        spacing={0}
      >
        <Grid item xs={1} className="WorksCard__check">
          {RadioContent}
        </Grid>
        
        <Grid item xs={11} className={cx("WorksCard__list_row", { "list": isListCard })}>
          <Grid container className={cx("WorksCard__list_con_box")}>

            <Grid item xs={3} className="WorksCard__table">
              <h6 className="WorksCard__title">Case ID</h6>
              <div className={cx("WorksCard__contents", { "list": isListCard })}>{checkValueDash(info.caseId)}</div>
            </Grid>
            <Grid item xs={2} className="WorksCard__table">
              <h6 className="WorksCard__title">Pateint</h6>
              <div className={cx("WorksCard__contents", { "list": isListCard })}>{checkValueDash(info.patient)}</div>
            </Grid>
            <Grid item xs={2} className="WorksCard__table">
              <h6 className="WorksCard__title">Sender</h6>
              <div className={cx("WorksCard__contents", { "list": isListCard })}>{checkValueDash(info.sender && info.sender.company)}</div>
            </Grid>
            <Grid item xs={2} className="WorksCard__table">
              <h6 className="WorksCard__title">Receiver</h6>
              <div className={cx("WorksCard__contents", { "list": isListCard })}>{checkValueDash(info.receiver && info.receiver.company)}</div>
            </Grid>
            <Grid item xs={2} className="WorksCard__table">
              <h6 className="WorksCard__title">Due Date</h6>
              <div className={cx("WorksCard__contents", { "list": isListCard })}>{checkValueDash(strDudate)}</div>
            </Grid>
            <Grid item xs={1} className="WorksCard__table arrow_icon">
              {!isListCard && <ExpandMoreIcon />}
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Styled.WorksCard>
  );
}

function checkValueDash(val){
  return val? val: <div>-</div>
}

const Styled = {
  WorksCard: styled.div`
  width:100%;

  .MuiFormControlLabel-root{
    margin:0;
  }
  .WorksCard__row,.MuiGrid-grid-xs-1{
    position: relative;
  }
  .MuiRadio-colorPrimary.Mui-checked{
    color:${color.blue};
  }
  .WorksCard__check_box{
      position: relative;
      top: 33%;
      left: 0;
      padding: 0;
    
      &.list{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
      }
  }
  .MuiCheckbox-colorPrimary.Mui-checked{
    color:red;
  }

  .WorksCard__list_row{
    position: relative;
    ${font(16, color.black_font)};
    border: 1px solid ${color.grat_border6};
    border-radius: 5px;
    background: ${color.white};
    padding: 25px 15px 15px;
    transition: all .3s;
    cursor: pointer;
    z-index: 1;
    &.list{
      margin-bottom:5px;
      padding:25px 0px 10px 0;
    }

    &::before{
      position: absolute;
      ${font(14, color.white)};
      display: block;
      content:"${props=>props.labelText}";
      top: -10px;
      width: 100px;
      background: ${props => props.labelColor};
      
      border-radius: 15px;
      line-height: 24px;
      height: 24px;
      text-align: center;     
    }
    &:hover{
      border: 1px solid ${color.blue};
      box-shadow: 0px 0px 5px 2px ${color.blue_week}; 
    }
  }
  .WorksCard__table{
    padding-left: 20px;

    &.arrow_icon{
      position:relative;
      color: ${color.blue};
      text-align: center;
      & > svg{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
      }
      /* padding-top: 10px; */
    }
  }
  .WorksCard__contents{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    &.list{
      ${font(14)};
    }
  }

  .WorksCard__title{
    ${font(14, color.gray_font)};
    line-height: 24px;
  }
  .WorksCard__contents{
    line-height: 24px;
  }

`
}


export default WorksCard;