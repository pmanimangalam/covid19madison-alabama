import React, {useEffect, useState} from 'react';
import './App.css';
import * as Constants from './constants';

import DashboardHeader from './header/Header';
import DashboardLayout from './dashboard/DashboardLayout';
import Typography from '@material-ui/core/Typography';
import PageLoading from './page/loading';

const App =() =>{

  const [alCountyDetails, setAlCountyDetails] = useState();
  const [countyDailyCounts, setCountyDailyCounts] = useState([]);

  const [totalCases, setTotalCases] = useState();
  const [totalDeaths, setTotalDeaths] = useState();
  const [casesYesterday, setCasesYesterday] = useState();
  const [testsReported, setTestsReported] = useState();

  useEffect(() =>{
    getAlCounties();
    getAlMadisonDailyCounts();
  },[]);

  const getAlCounties = async () => {
    let api_url = Constants.AL_COUNTIES;
    setAlCountyDetails({});
    const response = await fetch(api_url);
    const data = await response.json();
    setAlCountyDetails(data[44]);
  }

  const getAlMadisonDailyCounts = async () => {
    let api_url = Constants.AL_MADISON_DAILY_COUNTS;
    setTotalCases({});
    setTotalDeaths({});
    setCasesYesterday({});
    setTestsReported({});
    setCountyDailyCounts([]);
    const response = await fetch(api_url);
    const data = await response.json();

    setTotalCases(data[data.length - 1]);
    setTotalDeaths(data[data.length - 1]);
    setCasesYesterday(data[data.length - 2]);
    setTestsReported(data[data.length - 1]);

    const dataScale = [];
    let preCaseValue = 0;
    let nxtCaseValue = 0;

    let preDeathValue = 0;
    let nxtDeathValue = 0;

    let preTestedValue = 0;
    let nxtTestedValue = 0;

    for(let dataIndex in data){
      preCaseValue = (dataIndex === 0)?0:data[dataIndex -1]?.cases;
      nxtCaseValue = data[dataIndex]?.cases;

      preDeathValue = (dataIndex === 0)?0:data[dataIndex -1]?.deaths;
      nxtDeathValue = data[dataIndex]?.deaths;

      preTestedValue = (dataIndex === 0)?0:data[dataIndex -1]?.tested;
      nxtTestedValue = data[dataIndex]?.tested;

      dataScale.push({
        cases: data[dataIndex]?.cases,
        casesPerDay: (nxtCaseValue - preCaseValue < 0)?0:nxtCaseValue - preCaseValue,
        date: data[dataIndex]?.date,
        deaths: data[dataIndex]?.deaths,
        deathsPerDay: (nxtDeathValue - preDeathValue < 0)?0:nxtDeathValue - preDeathValue,
        tested: data[dataIndex]?.tested,
        testedPerDay: (nxtTestedValue - preTestedValue < 0)?0:nxtTestedValue - preTestedValue,
      })
    }
    console.log(dataScale);
    setCountyDailyCounts(dataScale);
  }


  return(
    <div className="App">

      <DashboardHeader />

      <div className="App-Body">

        <Typography variant="h4" component="h1" color="inherit" className="text-center">
          Madison County COVID-19 Cases
        </Typography>

        <br />

        <DashboardLayout 
          countyData={alCountyDetails}
          totalCasesData={totalCases} 
          totalDeathsData={totalDeaths} 
          casesYesterdayData={casesYesterday} 
          testsReportedData={testsReported} 
          countyDailyCountsData={countyDailyCounts} />

      </div>

    </div>
  )
}

export default App;
