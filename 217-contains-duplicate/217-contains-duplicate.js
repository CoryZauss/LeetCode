/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // itterate thru array one time
    // add each array elemtnet to obj if undefined
      // if element not undefined return true
      // else return false
    let obj = {};
    for (let i = 0; i < nums.length; i+=1){
        if (obj[nums[i]] !== undefined){
            return true
        }
            obj[nums[i]] = nums[i]
    }
    return false
};