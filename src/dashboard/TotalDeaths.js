import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

export default function TotalDeaths({totalDeaths}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className="text-center">
        <Typography className={classes.title} gutterBottom>
          <Box color="text.primary">Total Deaths</Box>
        </Typography>
        <Typography variant="h5" component="p">
          <Box color="error.main">{totalDeaths?.deaths?.toLocaleString()}</Box>
        </Typography>
      </CardContent>
    </Card>
  );
}