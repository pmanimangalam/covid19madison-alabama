export function csvToJson(csv) {
    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");

    for(var i=1;i<lines.length-1;i++) {
        var obj = {};
        var currentline=lines[i].split(",");
        for(var j=0;j<headers.length;j++) {
            obj[headers[j]?.replace(/['"]+/g, '')] = currentline[j]?.replace(/['"]+/g, '');
        }
        result.push(obj);
    }

    return result;
}