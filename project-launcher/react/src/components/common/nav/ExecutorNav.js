// import React from 'react';
// import styled from 'styled-components';
// import { color } from 'styles/__utils';
// import { icon_plus } from 'components/base/images';
// import {PlainDim} from 'components/common/dim';
// import { useImmer } from "use-immer";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';

import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles(theme => ({
  root: {
    width:200,
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'SNAP Scan' },
  { icon: <SaveIcon />, name: 'Smile Design' },
  { icon: <PrintIcon />, name: 'Scan App' },
  { icon: <ShareIcon />, name: 'IOS' },
  { icon: <FavoriteIcon />, name: 'Design Platform' },
];

function ExecutorNav() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden(prevHidden => !prevHidden);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
    {/* <Button onClick={handleVisibility}>Toggle Speed Dial</Button> */}
    <SpeedDial
      ariaLabel="SpeedDial tooltip example"
      className={classes.speedDial}
      hidden={hidden}
      icon={<SpeedDialIcon />}
      onClick={handleToggle}
      open={open}
      direction="down"
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={handleToggle}
        />
      ))}
    </SpeedDial>
  </div>
  );
}




// function ExecutorNav(props) {
//   const [value,setValue] = useImmer({
//     dim:false
//   });


//   return (
//     <Styled.ExecutorNav>
//       {/* <PlainDim  view={value.dim} /> */}
//       <div className="dim"></div>
//       <div className="executor__menu_box" >
//         <span className="menu__icon_con" >
//           <div className="menu__icon_box">
//             <img src={icon_plus} alt="icon_plus" className="menu__icon" />
//           </div>
//         </span>
//       </div>
//     </Styled.ExecutorNav>
//   );
// }

// const Styled = {
//   ExecutorNav: styled.div`
//   width:100px;
//   padding-top:20px;
//   .executor__menu_box{
//     text-align:center;
//   }
//     .menu__icon_con{
//       position:relative;
//       display:inline-block;
//       width:60px;
//       height:60px;
//       border-radius:100%;
//       background:${color.blue};
//       cursor: pointer;
//     }
//     .menu__icon_box{
//       display:inline-block;
//       position:absolute;
//       left:50%;
//       top:50%;
//       transform:translate(-50%,-50%);
//       font-size:37px;
//       color:white;
//     }
//     .menu__icon{
//       display:inline-block;
//       width:100%;
//       height:100%;
//     }
//   `
// }

export default ExecutorNav;