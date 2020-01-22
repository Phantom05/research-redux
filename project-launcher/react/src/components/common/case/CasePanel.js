import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { PlainTooltip } from 'components/common/tooltip';
import styled from 'styled-components';
import cx from 'classnames';
import { useImmer } from 'use-immer';
import { TeethModule } from 'components/common/module';
import CreateIcon from '@material-ui/icons/Create';
import {color,font} from 'styles/__utils';
import Button from '@material-ui/core/Button';


import {CaseMemo} from 'components/common/case';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


function CasePanel(props) {
  const { type } = props;
  const classes = useStyles();
  const [panel, setPanel] = useImmer({
    indication: {
      isOpen: false,
      hidden: false,
      isEdit:false,
    },
    sender: {
      isOpen: true,
      hidden: false,
      isEdit: true,
    },
    receiver: {
      isOpen: true,
      hidden: false,
      isEdit: false,
    },
  });

  const handleClick = (e,name) => {
    e.stopPropagation();
    setPanel(draft => {
      {
        draft[name].isOpen = !draft[name].isOpen
      }
    })
  };

  useEffect(() => {
    if (type === 'create') {
      setPanel(draft => {
        draft.receiver.hidden = true;
      })
    }
  }, []);

  const indicationTooltipText = `Lorem im illo dolore quo?`;

  return (
    <Styled.CasePanel className={classes.root}>

      <hr className="boundery__line"/>
      <ExpansionPanel
        className={cx('panel', { hidden: panel.indication.hidden })}
        expanded={panel.indication.isOpen}
      >
        <ExpansionPanelSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={(e)=>handleClick(e,'indication')}
        >
          <Typography className={classes.heading}>
            <span className="title__text">Indication </span>
            <PlainTooltip
              type="help"
              title={indicationTooltipText}
              placement="right-start"
            />
          </Typography>
        </ExpansionPanelSummary>
        <TeethModule />
      </ExpansionPanel>
      <hr className="boundery__line"/>

      <ExpansionPanel
        className={cx('panel', { hidden: panel.sender.hidden })}
        expanded={panel.sender.isOpen}
      >
        <ExpansionPanelSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          onClick={(e)=>handleClick(e,'sender')}
        >
          <Typography className={classes.heading}>
            <span className="title__text">Sender's Memo</span> <CreateIcon/>
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          {!panel.sender.isEdit 
          ? `${indicationTooltipText}` 
          : <CaseMemo content={indicationTooltipText}/>
          }
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        className={cx('panel', { hidden: panel.receiver.hidden })}
        expanded={panel.receiver.isOpen}
      >
        <ExpansionPanelSummary
          aria-controls="panel3a-content"
          id="panel3a-header"
          onClick={(e)=>handleClick(e,'receiver')}
        >
          <Typography className={classes.heading}>
            <span className="title__text">Recevier's  Memo</span> </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>

        {!panel.receiver.isEdit 
          ? `${indicationTooltipText}` 
          : <CaseMemo content={indicationTooltipText}/>
          }

        </ExpansionPanelDetails>
      </ExpansionPanel>

      <hr className="boundery__line"/>
      <div className="upload__button_box">
        <Button 
          variant="contained" 
          className="CreateCase__button CreateCase__button-white" 
          component="span">Upload Cloud</Button>
        <Button 
          variant="contained" 
          className="CreateCase__button CreateCase__button-blue float-right" 
          component="span">Create</Button>
      </div>
        
    </Styled.CasePanel>
  );
}

export default CasePanel;

const Styled = {
  CasePanel: styled.div`
    .panel{
      &.hidden{
        display:none;
      }
    }

    .MuiPaper-elevation1{
      box-shadow:none
    }
    .boundery__line{
      border:.5px solid ${color.grat_border6};
    }
    .title__text{
      ${font(18,color.black)};
    }
    .MuiExpansionPanelSummary-root{
      padding:0;
    }
    .MuiExpansionPanelDetails-root{
      padding:5px;
    }
    .CreateCase__button{
      box-shadow:none;
      border-radius:3px;
      font-weight:600;
      &-blue{
        border:2px solid ${color.blue};
        background:${color.blue};
        color:white;
        &:hover{
          background:${color.blue_hover};
          box-shadow:none;
        }
      }
      &-white{
        border:2px solid ${color.blue};
        background:white;
        color:${color.blue};
        &:hover{
          background:white;
          box-shadow:none;
        }
      }
    }
    .upload__button_box{
      margin-top:28px;
      &:after{
        display:block;
        content:"";
        clear: both;
      }
      .float-right{
        float:right;
      }
    }
    .MuiExpansionPanel-root:before{
      height:0;
    }
    .ck.ck-editor__top.ck-reset_all{
      display:none;

    }
  `
}