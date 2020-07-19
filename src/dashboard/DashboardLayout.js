import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CountyDetails from './CountyDetails';
import TotalCases from './TotalCases';
import TotalDeaths from './TotalDeaths';
import CasesYesterday from './CasesYesterday';
import TestsReported from './TestsReported';
import CumulativeCases from './CumulativeCases';
import CumulativeDeaths from './CumulativeDeaths';
import CumulativeTests from './CumulativeTests';

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

export default function DashboardLayout({countyData, totalCasesData, totalDeathsData, casesYesterdayData, testsReportedData, countyDailyCountsData}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify={'center'}>
        <Grid item lg={4} md={6} sm={12} xs={12}>
              <CountyDetails alCountyData={countyData} 
                totalCases={totalCasesData}
                totalDeaths={totalDeathsData}/>
              <br /><br />
        </Grid>
      </Grid>
      <Grid container spacing={3}>

        <Grid item lg={3} md={4} sm={6} xs={12}>
              <TotalCases totalCases={totalCasesData} />
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
              <TotalDeaths totalDeaths={totalDeathsData}/>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
              <CasesYesterday casesYesterday={casesYesterdayData}/>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
              <TestsReported testsReported={testsReportedData}/>
        </Grid>

      </Grid>

      <br />
      <CumulativeCases countyDailyCounts={countyDailyCountsData} />

      <br />
      <CumulativeDeaths countyDailyCounts={countyDailyCountsData} />

      <br />
      <CumulativeTests countyDailyCounts={countyDailyCountsData} />

    </div>
  );
}