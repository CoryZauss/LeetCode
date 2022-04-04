/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1]);
    //sort by lowest first interval
    
    let count = 0;
    let current = intervals[0];
    
    for ( let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < current[1]) count ++;
        //increases count if they are overlapping
        else current = intervals[i]
    }
    return count
};