/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // must be linear, no extra space ( in place)
    for ( let i = 0; i < nums.length; i++) {
        let p1 = i+1, p2= i-1;
        if (nums[i] !== '_') {
            while( p2 > 0 || p1 < nums.length) {
                if (nums[i] === nums[p1]) {
                    nums[i] = '_';
                    nums[p1] = '_';
                } 
                if (nums[i] === nums[p2]) {
                    nums[i] = '_';
                    nums[p2] = '_';
                }
                p1 < nums.length && p1++
                p2 > 0 && p2--
            }
        }
      
    }
    for ( let i = 0; i < nums.length; i++) {
        if ( nums[i] !== '_' ) {
            return nums[i]
        }
    }
};