import React from 'react';
import ChartistGraph from 'react-chartist';

export default function CumulativeTests({countyDailyCounts}) {

  function setDataAndOptions(countyDailyCounts) {
    var series = {
      data : [],
      high : 0,
      low  : 0,
      labels : []
    };
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var dayTime = 24*60*60*1000;
    let dateLabels = null;
    let checkDate = null;
    for (const dailyCounts of countyDailyCounts) {
      checkDate = new Date(new Date(dailyCounts?.date).getTime() + dayTime).getDate();
      if((checkDate === 1) || (checkDate === 15)) {
        series.data.push(dailyCounts?.tested);
        dateLabels = new Date(new Date(dailyCounts?.date).getTime() + dayTime);
        series.labels.push((dateLabels.getDate()) + ' ' + months[dateLabels.getMonth()]);
      }
    }
    series.high = Math.max(...series.data);
    series.low  = Math.min(...series.data);
    return series;
  }

  var data = {
    labels: setDataAndOptions(countyDailyCounts)['labels'],
    series: [setDataAndOptions(countyDailyCounts)['data']]
  };

  var options = {
    high: setDataAndOptions(countyDailyCounts)['high'],
    low:  setDataAndOptions(countyDailyCounts)['low'],
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return value;
      }
    },
    showArea: true,
  };

  var type = 'Line';

  return (
    <div>
      <h3>Cumulative Tests</h3>
      <ChartistGraph data={data} options={options} type={type} />
    </div>
  )

}