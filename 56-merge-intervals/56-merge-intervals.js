/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //sort array first by starting indexs
    intervals.sort((a,b) => a[0]-b[0]);
    //initialize result with first interval
    let result = [intervals[0]]
    let index = 0;
    //move thru intervals, and check if an interval overlaps with last tupple in results
    for (let i=1; i < intervals.length; i++){
        if ( intervals[i][0] <= result[index][1]) {
            result[index][1] = Math.max(result[index][1], intervals[i][1])
        } else {
            //if they dont overlap then we can push it and safely move index up
            result.push(intervals[i]);
            index++;
        }
    }
    return result
};