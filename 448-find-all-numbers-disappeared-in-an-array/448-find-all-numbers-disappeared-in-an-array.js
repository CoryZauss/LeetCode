/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        let idx = num-1;
        nums[idx] = Math.abs(nums[idx]) * -1;
        // for ex: [4,3,2,7,8,2,3,1]
        // num:4, idx:3 --- since 4 exists we change the number at the 3rd index (where 4 would go) to a neg to represent that.
        // at the end of the loop whichever indexs are left positive in nums are the numbers( must add 1 back cause 0 indexed) 
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) res.push(i+1);
    }
    return res;
    // Time Complexity: O(N)
    // Space Complexity: O(1)
};

