/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function(nums) {
//     let p1 = 0;
//     let p2 = nums.length -1;
    
//     while (p1 <= p2) {
//           const mid = Math.floor((p2 + p2) / 2); 
//         if(nums[mid] < nums[mid - 1]){ 
//             return nums[mid];
//         } else {
//             if(nums[mid] > nums[0]) {              
//                 p1 = mid + 1;
//             } else {
//                 p2 =  mid - 1; 
//             }
//         }
//     }
    
//     return nums[0]; 
// };


var findMin = function(nums) {
    let start = 0;
    let end = nums.length-1

    while (start < end) {
        if (nums[start] < nums[end]) {
            return nums[start]
        }
        let mid = Math.floor((end+start)/2)
        if (nums[start] > nums[mid]) {
            end = mid
        }
        else {
            start = mid + 1     
        }
    }
    return nums[start]
};