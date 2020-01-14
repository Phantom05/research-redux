import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {color} from 'styles/__utils';
import cx from 'classnames';

// Inspired by the Facebook spinners.
const useStylesFacebook = makeStyles({
  root: {
    position: 'relative',
  },
  top: {
    color: '#eef3fd',
  },
  bottom: {
    color: `${color.green}`,
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
});

function FacebookProgress(props) {
  const classes = useStylesFacebook();
  const {size} = props;
  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        value={100}
        className={classes.top}
        size={size?size:24}
        thickness={4}
        {...props}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.bottom}
        size={size?size:24}
        thickness={4}
        {...props}
      />
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
  },
  margin: {
    // margin: theme.spacing(1),
  },
}));

export default function CustomizedProgressBars(props) {
  const classes = useStyles();
  const {className,size} = props;

  return (
    <div className={cx(classes.root,className)}>
      <FacebookProgress size={size}/>
    </div>
  );
}