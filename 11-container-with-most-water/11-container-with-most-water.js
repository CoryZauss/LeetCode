/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let sums = {};
    let l = 0;
    let r = height.length -1;
    high = 0;
    while ( l !== r) {
        temp = Math.min(height[l], height[r]) * (Math.abs((l+1) - (r+1)))
      if (temp > high) {
        high = temp
      }
        if ( height[l] < height[r]) {
           l++ ;
        } else {
            r--;
        }
    }
    return high
};