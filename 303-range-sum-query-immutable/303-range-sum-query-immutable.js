/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = [];
    for (let i = 0; i < nums.length; i++ ) {
        this.arr.push(nums[i])
    }
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    // left right are indexs
    if (left === right) return this.arr[left]
    console.log(this)
    let sum = 0;
    while ( left <= right) {
        sum+= this.arr[left]
        left++
    }
    return sum
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 
 

 */