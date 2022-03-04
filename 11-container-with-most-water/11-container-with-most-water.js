/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let sums = {};
    let l = 0;
    let r = height.length -1;
    while ( l !== r) {
        sums[`${l}, ${r}`] = Math.min(height[l], height[r]) * (Math.abs((l+1) - (r+1)))
        if ( height[l] < height[r]) {
           l++ ;
        } else {
            r--;
        }
    }
    let high = 0;
    for ( let key in sums) {
        if (sums[key] > high){
            high = sums[key]
        }
    }
    return high
};