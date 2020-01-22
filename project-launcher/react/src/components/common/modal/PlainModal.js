import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import cx from 'classnames';

const loadStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    fontSize:30,
    width:700,
    borderRadius:5,
    outline:'none'
  },
}));

const PlainStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    fontSize:30,
    width:360,
    borderRadius:5,
    outline:'none'
  },
}));

/**
 * 
 *  <PlainModal 
 * type = caseLoad
        isOpen={value.modal}
        content={<ModalLoginContent /> }
      />
 * @param {*} props 
 */
function PlainModal(props) {
  const {isOpen,content,type} = props;
  let classes = PlainStyles();
  const stylesObj = {
    'caseLoad':loadStyles,
    'plain':PlainStyles
  }
  const typeStyle = stylesObj[type];
  if(typeStyle){
    classes = typeStyle()
  }
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    setOpen(isOpen);
  },[isOpen])

  return (
    <Styled.PlainModal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // style={{width:700}}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={cx(classes.paper)}>
            {content}
          </div>
        </Fade>
      </Modal>
    </Styled.PlainModal>
  );
}

const Styled = {
  PlainModal:styled.div`
    /* .modal__content{
      border-radius:5px;
      background:black;
      font-size:50px;
    } */
  `
}
export default PlainModal;
