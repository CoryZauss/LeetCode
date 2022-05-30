/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let current = 0;
    let end = 1;
    while (end < nums.length) {
        if (nums[current] === nums[end]) {
             nums.splice(current, 1)
        } else {
            current++;
            end++;
        }
        
    }
    return end;
};