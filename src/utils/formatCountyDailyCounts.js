export function formatCountyDailyCounts(countyDailyCounts,seriesKey,labelPlugin){
    var config = {
        series : [],
        high : 0,
        low  : 0,
        labels : []
    };
    var checkLabelPlugin = labelPlugin?true:false;
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var dayTime = 24*60*60*1000;
    let dateLabels = null;
    let makeDate = null;
    for (const dailyCounts of countyDailyCounts) {
        makeDate = new Date(new Date(dailyCounts?.date).getTime() + dayTime);
        dateLabels = makeDate.getDate() + ' ' + months[makeDate.getMonth()];
        config.labels.push(dateLabels);

        if(checkLabelPlugin) {
            config.series.push({
                meta: dateLabels,
                value: dailyCounts?.[seriesKey]
            });
        } else{
            config.series.push(dailyCounts?.[seriesKey]);
        }
    }
    config.high = Math.max(...config.series);
    config.low  = Math.min(...config.series);
    return config;
}