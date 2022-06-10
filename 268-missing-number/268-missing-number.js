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

var missingNumber = function(arr) {
   let ans = 0;
    for(let i=0; i<arr.length; i++){
        ans = ans^i^arr[i];
    }
    return ans^arr.length;
};