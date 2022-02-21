/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let storeStackMax;
    let max = nums[0];
    storeStackMax = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        let temp = nums[i] + storeStackMax;
        storeStackMax = temp > nums[i] ? temp : nums[i];
        max = storeStackMax > max ? storeStackMax : max;      
    }
    
    return max;
};