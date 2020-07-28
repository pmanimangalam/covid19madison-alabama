import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: '175px',
    height: '120px',
    backgroundColor: '#FFFFFF',
    padding: '10px 20px',
    position: 'absolute',
    right: '0px',
    top: '-28px',
  },
}));

export default function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="UAH College of Business" src="./static/COB_UAH.png" variant="square" className={classes.large} />
    </div>
  );
}