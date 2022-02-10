/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //use an object to keep track of variables as we move thru array
    //check if target minus current indexs variable is present in the object on each itteration
    // if present return stored i , and current i
    let store = {}
    for (let i = 0; i < nums.length; i++) {
        if (store.hasOwnProperty(target-nums[i])) {
            return[i, store[target-nums[i]]]
        }
        store[nums[i]] = i
    }
};