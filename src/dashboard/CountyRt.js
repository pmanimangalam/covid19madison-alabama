import React from 'react';
import ChartistGraph from 'react-chartist';
import { formatCountyDailyCounts } from '../utils/formatCountyDailyCounts';
import ChartistTooltip from 'chartist-plugin-tooltips-updated';


export default function CountyRt({countyDailyRt}) {
  
  var config = {};
  config = formatCountyDailyCounts(countyDailyRt,'r_t_most_likely',true);

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
    showPoint: true,
    height: '250px',
    plugins: [
      ChartistTooltip({
        appendToBody: true
      })
    ],
  };

  var type = 'Line';

  return (
    <div className="db-rt-daily">
      <h3>R<sub>t</sub> value (unsmoothed) for the County</h3>
      <ChartistGraph data={data} options={options} type={type} />
    </div>
  )

}