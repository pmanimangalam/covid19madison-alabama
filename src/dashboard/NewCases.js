import React from 'react';
import ChartistGraph from 'react-chartist';
import { formatCountyDailyCounts } from './../utils/formatCountyDailyCounts';
import ChartistTooltip from 'chartist-plugin-tooltips-updated';

export default function NewCases({countyDailyCounts}) {
  
  var config = {};
  config = formatCountyDailyCounts(countyDailyCounts,'casesPerDay',true);

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
    height: '250px',
    showPoint: true,
    showArea: true,
    plugins: [
      ChartistTooltip({
        appendToBody: true
      })
    ],
  };

  
  var type = 'Bar';

  return (
    <div className="db-new-cases">
      <h3>New cases for the County</h3>
      <ChartistGraph data={data} options={options} type={type} />
    </div>
  )

}