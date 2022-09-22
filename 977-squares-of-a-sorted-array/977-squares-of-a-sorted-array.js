/**
 * @param {number[]} nums
 * @return {number[]}
 */

let sortedSquares = function(nums) {
    let result = [], start = 0, end = nums.length-1;
    
    while(start <= end ){
        if (nums[start] **2 > nums[end]**2){
            result.push(nums[start]**2)
            start++
        } else {
            result.push(nums[end]**2);
            end--;
        }
    }
    return result.reverse()
}






// var sortedSquares = function(nums) {
//     //pop last , square it, insert in new array at right place
//     let result = []
//     while(nums.length){
//         let pop = nums.pop()
//         pop = pop*pop
//         insertInPlace(result,pop)
//     }
//     return result
// };

// const insertInPlace = (array, num) => {
//     if (array.length === 0) return array.push(num)
//     if (num > array.at(-1)) return array.push(num)
    
//     for (let i  = array.length-1; i >= 0; i--) {
//         if (num > array[i]) {
//             array.splice(i+1, 0, num)
//             break;
//         }
//         if(i === 0) {
//             array.unshift(num)
//             break;
//         }
//     }
// }