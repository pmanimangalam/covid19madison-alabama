import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function DashboardHeader({totalCases,casesYesterday,totalDeaths,testsReported,countyDailySmoothedRt,countyDailyRt,alDailySmoothedRt}) {
  const classes = useStyles();
  const newCases = totalCases?.cases - casesYesterday?.cases;
  const countyDailySmoothedRtValue = Number(countyDailySmoothedRt[countyDailySmoothedRt?.length-1]?.r_t_most_likely);
  const countyDailyRtValue = Number(countyDailyRt[countyDailyRt?.length-1]?.r_t_most_likely);
  const alDailySmoothedRtValue = Number(alDailySmoothedRt[alDailySmoothedRt?.length-1]?.r_t_most_likely);
  return (
    <div className={classes.root}>

        <Grid container direction="row" justify="center" spacing={3}>
            <Grid item="true" lg={2} md={3} sm={4} xs={4}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography variant="body2" color="textSecondary">
                        <Box color="text.primary">Madison smoothed R<sub>t</sub></Box>
                    </Typography>
                    <Typography variant="h5" component="p">
                        <Box color="primary.main">{countyDailySmoothedRtValue}</Box>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>

        <br />

        <Grid container direction="row" justify="center" spacing={3}>

            <Grid item="true" lg={2} md={3} sm={4} xs={4}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography variant="body2" color="textSecondary">
                        <Box color="text.primary">Madison unsmoothed R<sub>t</sub></Box>
                    </Typography>
                    <Typography variant="h5" component="p">
                        <Box color="success.main">{countyDailyRtValue}</Box>
                    </Typography>
                </Paper>
            </Grid>

            <Grid item="true" lg={2} md={2} sm={2} xs={2}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography variant="body2" color="textSecondary">
                        <Box color="text.primary">Alabama smoothed R<sub>t</sub></Box>
                    </Typography>
                    <Typography variant="h5" component="p">
                        <Box color="success.main">{alDailySmoothedRtValue}</Box>
                    </Typography>
                </Paper>
            </Grid>

            {/* <Grid item="true" lg={2} md={3} sm={4} xs={4}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography>
                        <Box color="text.primary">New Cases</Box>
                    </Typography>
                    <Typography variant="h5" component="p">
                        <Box color="warning.main">{newCases?.toLocaleString()}</Box>
                    </Typography>
                </Paper>
            </Grid>

            <Grid item="true" lg={2} md={3} sm={4} xs={4}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography>
                        <Box color="text.primary">Total Cases</Box>
                    </Typography>
                    <Typography variant="h5" component="p">
                        <Box color="primary.main">{totalCases?.cases?.toLocaleString()}</Box>
                    </Typography>
                </Paper>
            </Grid> */}

            {/* <Grid item="true" lg={2} md={3} sm={4} xs={4}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography>
                        <Box color="text.primary">Total Deaths</Box>
                    </Typography>
                    <Typography variant="h5" component="p">
                        <Box color="error.main">{totalDeaths?.deaths?.toLocaleString()}</Box>
                    </Typography>
                </Paper>
            </Grid>

            <Grid item="true" lg={2} md={3} sm={4} xs={4}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography>
                        <Box color="text.primary">Tests Reported</Box>
                    </Typography>
                    <Typography variant="h5" component="p">
                        <Box color="success.main">{testsReported?.tested?.toLocaleString()}</Box>
                    </Typography>
                </Paper>
            </Grid> */}
            
        </Grid>
    </div>
  );
}