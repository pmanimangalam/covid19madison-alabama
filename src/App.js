import React, {useEffect, useState} from 'react';
import './App.css';
import * as Constants from './constants';

import DashboardHeader from './header/Header';
import DashboardLayout from './dashboard/DashboardLayout';
import DashboardFooter from './footer/Footer';
import Typography from '@material-ui/core/Typography';
import { csvToJson } from './utils/csvToJson';

import PageLoading from './page/loading';
import LastUpdated from './page/LastUpdated';


const App =() =>{

  const [alCountyDetails, setAlCountyDetails] = useState();
  const [countyDailyCounts, setCountyDailyCounts] = useState([]);
  const [countyDailyRt, setCountyDailyRt] = useState([]);
  const [countyDailySmoothedRt, setCountyDailySmoothedRt] = useState([]);

  const [totalCases, setTotalCases] = useState();
  const [totalDeaths, setTotalDeaths] = useState();
  const [casesYesterday, setCasesYesterday] = useState();
  const [testsReported, setTestsReported] = useState();

  const [loading, setLoading] = useState(true);
  const date = new Date();

  useEffect(() =>{
    getAlCounties();
    getAlCountyDailyCounts();
    getAlCountyDailyRt();
    getAlCountyDailySmoothedRt();
  },[]);

  const getAlCounties = async () => {
    let api_url = Constants.AL_COUNTIES;
    //setLoading(true);
    setAlCountyDetails({});
    const response = await fetch(api_url);
    const data = await response.json();
    setAlCountyDetails(data[44]);
    //setLoading(false);
  }

  const getAlCountyDailyCounts = async () => {
    let api_url = Constants.AL_MADISON_DAILY_COUNTS;
    setLoading(true);
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
    setCountyDailyCounts(dataScale);
    setLoading(false);
  }

  const getAlCountyDailyRt = async () => {
    let api_url = `./data/Madison${Constants.AL_COUNTY_RT}`;
    setCountyDailyRt([]);
    const response = await fetch(api_url);
    const data = await response.text();
    const dataToJson = csvToJson(data);
    setCountyDailyRt(dataToJson);
  }

  const getAlCountyDailySmoothedRt = async () => {
    let api_url = `./data/Madison${Constants.AL_COUNTY_SMOOTHED_RT}`;
    setCountyDailySmoothedRt([]);
    const response = await fetch(api_url);
    const data = await response.text();
    const dataToJson = csvToJson(data);
    setCountyDailySmoothedRt(dataToJson);
  }


  return(
    <div className="App">

      <DashboardHeader />

      <div className="App-Body">

        <br /> 
        <Typography variant="h4" component="h1" color="inherit" className="text-center font-700">
          Madison County COVID-19 R<sub>t</sub> Values
        </Typography>

        <LastUpdated date={date} />
        

        <br />

        {loading && <PageLoading />}

        {!loading && <DashboardLayout 
                countyData={alCountyDetails}

                totalCasesData={totalCases} 
                totalDeathsData={totalDeaths} 
                casesYesterdayData={casesYesterday} 
                testsReportedData={testsReported} 
                countyDailyCountsData={countyDailyCounts}
                countyDailyRtData={countyDailyRt}
                countyDailySmoothedRtData={countyDailySmoothedRt} />
          }

      </div>

      <DashboardFooter />

    </div>
  )
}

export default App;
