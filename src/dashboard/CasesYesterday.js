import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CasesYesterday({casesYesterday}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className="text-center">
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Cases Yesterday
        </Typography>
        <Typography variant="h5" component="h2">
          {casesYesterday?.cases?.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}