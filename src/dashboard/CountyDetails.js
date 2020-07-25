import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
  },
  media: {
    width: 90,
    height: 140,
    margin: '0 auto',
  },
  title: {
    fontSize: 14,
  },
});

export default function CountyDetails({alCountyData, totalCases, totalDeaths}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Map_of_Alabama_highlighting_Madison_County.svg/758px-Map_of_Alabama_highlighting_Madison_County.svg.png"
          alt="Alabama County Map"
        />
      <CardContent>
        <Grid container>
            <Grid item xs={4} className="text-center">
              <Typography className={classes.title}>
                <Box color="text.primary">Population</Box>
              </Typography>
              <Typography variant="h6" component="p">
                <Box color="primary.main">{alCountyData?.population?.toLocaleString()}</Box>
              </Typography>
            </Grid>
            <Grid item xs={4} className="text-center">
              <Typography className={classes.title}>
                <Box color="text.primary">Cases per 10,000</Box>
              </Typography>
              <Typography variant="h6" component="p">
                <Box color="warning.main">{(((totalCases?.cases)/(alCountyData?.population))*10000).toFixed(2)}</Box>
              </Typography>
              </Grid>
            <Grid item xs={4} className="text-center">
              <Typography className={classes.title}>
                <Box color="text.primary">Deaths per 10,000</Box>
              </Typography>
              <Typography variant="h6" component="p">
                <Box color="error.main">{(((totalDeaths?.deaths)/(alCountyData?.population))*10000).toFixed(2)}</Box>
              </Typography>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}