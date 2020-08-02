import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import DashboardHeader from './DashboardHeader';

import CumulativeCases from './CumulativeCases';
import NewCases from './NewCases';
import CountyRt from './CountyRt';
import CountySmoothedRt from './CountySmoothedRt';
import AlSmoothedRt from './AlSmoothedRt';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function DashboardLayout({countyData, totalCasesData, totalDeathsData, casesYesterdayData, testsReportedData, countyDailyCountsData, countyDailyRtData, countyDailySmoothedRtData, alDailySmoothedRtData}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <DashboardHeader 
        totalCases={totalCasesData}
        casesYesterday={casesYesterdayData} 
        totalDeaths={totalDeathsData}
        testsReported={testsReportedData}
        countyDailySmoothedRt={countyDailySmoothedRtData}
        countyDailyRt={countyDailyRtData}
        alDailySmoothedRt={alDailySmoothedRtData}
      />

      <br /><br />
      <Container maxWidth="lg" component="main">
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <CountySmoothedRt countyDailySmoothedRt={countyDailySmoothedRtData} />
        </Grid>
        <br />
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <CountyRt countyDailyRt={countyDailyRtData} />
        </Grid>
        <br />
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <AlSmoothedRt alDailySmoothedRt={alDailySmoothedRtData} />
        </Grid>
        <br />
        {/* <Grid item lg={12} md={12} sm={12} xs={12}>
          <NewCases countyDailyCounts={countyDailyCountsData} />
        </Grid>
        <br />
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <CumulativeCases countyDailyCounts={countyDailyCountsData} />
        </Grid> */}
      </Container>
    </div>
  );
}