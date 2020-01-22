import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { PlainTooltip } from 'components/common/tooltip';
import styled from 'styled-components';
import cx from 'classnames';
import { useImmer } from 'use-immer';
import { TeethModule } from 'components/common/module';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const editorConfiguration = {
  toolbar: []
};

function CasePanel(props) {
  const { type } = props;
  const classes = useStyles();
  const [panel, setPanel] = useImmer({
    indication: {
      isOpen: true,
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
    console.log('handleClick');
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

  const indicationTooltipText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut est cupiditate sed sequi eos totam voluptas sint, atque ratione, ipsum dicta temporibus ullam consequuntur. Pariatur impedit autem illo dolore quo?`;

  return (
    <Styled.CasePanel className={classes.root}>

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
            <span className="title__text">Sender's Memo</span>
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          {
            !panel.sender.isEdit ? `${indicationTooltipText}` : <CKEditor
            editor={ClassicEditor}
            config={editorConfiguration}
            data={`${indicationTooltipText}`}
            onInit={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
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
          <Typography className={classes.heading}>Recevier's  Memo</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </Styled.CasePanel>
  );
}







export default CasePanel

const Styled = {
  CasePanel: styled.div`
    .panel{
      &.hidden{
        display:none;
      }
    }
  
  `
}