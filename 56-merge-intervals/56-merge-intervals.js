/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0]);
    let result = [intervals[0]]
    let index = 0;
    for (let i=1; i < intervals.length; i++){
        if ( intervals[i][0] <= result[index][1]) {
            result[index][1] = Math.max(result[index][1], intervals[i][1])
        } else {
            result.push(intervals[i]);
            index++;
        }
    }
    return result
};