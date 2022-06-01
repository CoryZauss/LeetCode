/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
 
    let front = 0, end = nums.length -1, changed = 0;
    
    while (front <= end) {
        if(nums[end] === "_") end--;
        if ( nums[end] === val) {
            nums[end] = "_";
            end--
            changed++
        } 
        if ( nums[front] === val) {
            nums[front] = "_";
            let temp = nums[end];
            nums[end] = nums[front];
            nums[front] = temp;
          
            changed++
        } else {
            front++
        }
        console.log(nums, front)
    }
    return nums.length - changed
};