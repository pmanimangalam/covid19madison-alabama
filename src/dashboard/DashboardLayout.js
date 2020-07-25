import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CountyDetails from './CountyDetails';
import TotalCases from './TotalCases';

import TotalDeaths from './TotalDeaths';
import CasesYesterday from './CasesYesterday';
import TestsReported from './TestsReported';

import CumulativeCases from './CumulativeCases';
import NewCases from './NewCases';

import CountyRt from './CountyRt';
import CountySmoothedRt from './CountySmoothedRt';


// import CumulativeDeaths from './CumulativeDeaths';
// import NewDeaths from './NewDeaths';
// import CumulativeTests from './CumulativeTests';
// import NewTests from './NewTests';

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

export default function DashboardLayout({countyData, totalCasesData, totalDeathsData, casesYesterdayData, testsReportedData, countyDailyCountsData, countyDailyRtData, countyDailySmoothedRtData}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify={'center'}>
        <Grid item lg={4} md={5} sm={6} xs={12}>
              <CountyDetails alCountyData={countyData} 
                totalCases={totalCasesData}
                totalDeaths={totalDeathsData}/>
              <br /><br />
        </Grid>
      </Grid>

      <Grid container spacing={5}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
              <TotalCases totalCases={totalCasesData} />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
              <TotalDeaths totalDeaths={totalDeathsData}/>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
              <CasesYesterday totalCases={totalCasesData} casesYesterday={casesYesterdayData}/>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
              <TestsReported testsReported={testsReportedData}/>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <CumulativeCases countyDailyCounts={countyDailyCountsData} />
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <NewCases countyDailyCounts={countyDailyCountsData} />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <CountyRt countyDailyRt={countyDailyRtData} />
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <CountySmoothedRt countyDailySmoothedRt={countyDailySmoothedRtData} />
        </Grid>
      </Grid>
      
      {/* <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <CumulativeDeaths countyDailyCounts={countyDailyCountsData} />
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <NewDeaths countyDailyCounts={countyDailyCountsData} />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <CumulativeTests countyDailyCounts={countyDailyCountsData} />
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <NewTests countyDailyCounts={countyDailyCountsData} />
        </Grid>
      </Grid> */}

    </div>
  );
}