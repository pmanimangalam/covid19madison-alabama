export function formatCountyDailyCounts(countyDailyCounts,seriesKey){
    var config = {
        series : [],
        high : 0,
        low  : 0,
        labels : []
    };
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var dayTime = 24*60*60*1000;
    let dateLabels = null;
    let makeDate = null;
    for (const dailyCounts of countyDailyCounts) {
        makeDate = new Date(new Date(dailyCounts?.date).getTime() + dayTime);
        if((makeDate.getDate() === 1) || (makeDate.getDate() === 15)|| true) {
            config.series.push(dailyCounts?.[seriesKey]);
            dateLabels = makeDate.getDate() + ' ' + months[makeDate.getMonth()];
            config.labels.push(dateLabels);
        }
    }
    config.high = Math.max(...config.series);
    config.low  = Math.min(...config.series);
    return config;
}