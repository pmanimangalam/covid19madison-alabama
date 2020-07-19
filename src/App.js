import React, {useEffect, useState} from 'react';
import './App.css';
import * as Constants from './constants';

import DashboardHeader from './header/Header';
import DashboardLayout from './dashboard/DashboardLayout';
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
    setCountyDailyCounts(data);
  }


  return(
    <div className="App">

      <DashboardHeader />

      <div className="App-Body">

        <h1 className="text-center">Madison County COVID-19 Cases</h1>
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
