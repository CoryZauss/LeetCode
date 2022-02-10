/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // move thru the array with 2 pointers
    //for every i on left pointer move right pointer thru arr
      // if pointers add up to target return both indexs
      //if not move left up one and right back to left + 1
   
    for (let i = 0; i < nums.length; i++ ){
        for (let j = i+1; j< nums.length; j++) {
            if ( nums[i] + nums[j] === target) {
                return [i, j]
            } 
        }
    }
};