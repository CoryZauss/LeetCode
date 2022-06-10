/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
  
//     for ( let i = 0; i < nums.length; i++) {
//         if (nums.indexOf(i) === -1) {
//             return i;
//         }
//     }
//     return nums.length;
    
// };

const missingNumber = function (nums) {
	return (nums.length * (nums.length + 1)) / 2 - nums.reduce((a, b) => a + b, 0);
};