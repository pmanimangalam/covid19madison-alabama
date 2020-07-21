import React from 'react';
import ChartistGraph from 'react-chartist';
import { formatCountyDailyCounts } from './../utils/formatCountyDailyCounts';

export default function NewDeaths({countyDailyCounts}) {

  var config = {};
  config = formatCountyDailyCounts(countyDailyCounts,'deathsPerDay');

  var data = {
    labels: config?.labels,
    series: [config?.series]
  };

  var options = {
    high: config?.high,
    low:  config?.low,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        var res = value.split(" ");
        if((Number(res[0]) === 1) || (Number(res[0]) === 15)) {
          return value;
        } else {
          return null;
        }
      }
    },
    showArea: true,
    showPoint: false,
    height: '250px',
  };

  var type = 'Line';

  return (
    <div className="db-cumulative-deaths">
      <h3>Deaths Per Day</h3>
      <ChartistGraph data={data} options={options} type={type} />
    </div>
  )

}