/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let current_maxSum = nums[0], maxSum = nums[0]
    
    for(let i = 1; i < nums.length; i ++){
        if(current_maxSum < 0) current_maxSum = nums[i]
        else current_maxSum += nums[i]
        maxSum = Math.max(current_maxSum, maxSum)
    }
    return maxSum
}