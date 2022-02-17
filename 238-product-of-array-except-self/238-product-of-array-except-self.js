/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    result = new Array(n).fill(1);
    let p1 = 0;
    let p2 = nums.length -1;
    let prefix = 1; 
    let suffix = 1;
    while(p1<n){
        result[p1] *= prefix
        result[p2] *= suffix
        
        prefix *= nums[p1++]
        suffix *= nums[p2--]
    }
    return result;
};