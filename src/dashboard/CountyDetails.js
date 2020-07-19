import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    height: 219,
    width: 139,
  },
}));

export default function CountyDetails({alCountyData, totalCases, totalDeaths}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            Population {alCountyData?.population?.toLocaleString()}
          </Typography>
          <Typography component="h6" variant="h6">
            {(((totalCases?.cases)/(alCountyData?.population))*10000).toFixed(2)} Cases per 10,000
          </Typography>
          <Typography component="h6" variant="h6">
          {(((totalDeaths?.deaths)/(alCountyData?.population))*10000).toFixed(2)} Deaths per 10,000
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Map_of_Alabama_highlighting_Madison_County.svg/758px-Map_of_Alabama_highlighting_Madison_County.svg.png"
        title="Alabama County Map"
      />
    </Card>
  );
}