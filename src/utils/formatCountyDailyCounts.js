export function formatCountyDailyCounts(countyDailyCounts,seriesKey,labelPlugin){
    var config = {
        series : [],
        high : 0,
        low  : 0,
        labels : []
    };
    var checkLabelPlugin = labelPlugin?true:false;
    var series = [];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var dayTime = 24*60*60*1000;
    let dateLabels = null;
    let makeDate = null;
    let seriesValue = 0;
    for (const dailyCounts of countyDailyCounts) {
        makeDate = new Date(new Date(dailyCounts?.date).getTime() + dayTime);
        dateLabels = makeDate.getDate() + ' ' + months[makeDate.getMonth()];
        seriesValue = isNaN(dailyCounts?.[seriesKey])?0:dailyCounts?.[seriesKey];
        config.labels.push(dateLabels);

        if(checkLabelPlugin) {
            config.series.push({
                meta: dateLabels,
                value: Number(seriesValue)
            });
            series.push(Number(seriesValue));
        } else{
            config.series.push(Number(seriesValue));
            series.push(Number(seriesValue));
        }
    }
    config.high = Math.max(...series);
    config.low  = Math.min(...series);
    return config;
}