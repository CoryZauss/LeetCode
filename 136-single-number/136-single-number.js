/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // must be linear, no extra space ( in place)
//     let p1 = 1;
//         while( p1 < nums.length) {
//             if (nums[0] === nums[p1]) {
                
//                 nums.splice(p1, 1);
//                 nums.splice(0, 1);
//                 p1 = 0;
//             } else if (p1 === nums.length -1 && nums[0] !== nums[p1]) {
//                 return nums[0]
//             }
            
//             p1++
            
//         }
    
//     return nums[0]
    // return nums.reduce((prev, curr) => prev ^ curr);
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i]
    }
    return result;
};