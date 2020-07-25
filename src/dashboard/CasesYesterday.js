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

export default function CasesYesterday({totalCases, casesYesterday}) {
  const classes = useStyles();
  const newCases = totalCases?.cases - casesYesterday?.cases;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className="text-center">
        <Typography className={classes.title} gutterBottom>
          <Box color="text.primary">New Cases</Box>
        </Typography>
        <Typography variant="h5" component="p">
          <Box color="warning.main">{newCases?.toLocaleString()}</Box>
        </Typography>
      </CardContent>
    </Card>
  );
}