import React from 'react';
import ChartistGraph from 'react-chartist';
import ChartistTooltip from 'chartist-plugin-tooltips-updated';
import { formatCountyDailyCounts } from './../utils/formatCountyDailyCounts';


export default function CumulativeTests({countyDailyCounts}) {

  var config = {};
  config = formatCountyDailyCounts(countyDailyCounts,'tested');

  var data = {
    labels: config?.labels,
    series: [config?.series]
  };

  var options = {
    high: config?.high,
    low:  config?.low,
    showArea: true,
    showPoint: false,
    //width: '100%',
    height: '250px',
    lineSmooth: true,
    axisX: {
      showGrid: true,
      labelInterpolationFnc: function(value, index) {
        var res = value.split(" ");
        if((Number(res[0]) === 1) || (Number(res[0]) === 15)) {
          return value;
        } else {
          return null;
        }
      },
    },
    axisY: {
      showGrid: true,
    },
    // plugins: [
    //   ChartistTooltip({
    //     appendToBody: true
    //   })
    // ]
  };

  var type = 'Line';

  return (
    <div className="db-cumulative-tests">
      <h3>Cumulative Tests</h3>
      <ChartistGraph data={data} options={options} type={type} />
    </div>
  )

}