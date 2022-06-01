/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
 
    let changed = 0;
    let back = nums.length -1;
    
    for (let i = nums.length -1; i >= 0; i--) {
        if (nums[i] === val) {
            changed++;
            nums[i] = nums[back]
            back--
        }
    }
    return nums.length - changed
};

