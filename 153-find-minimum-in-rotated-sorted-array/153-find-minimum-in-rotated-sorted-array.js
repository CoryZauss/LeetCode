/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = nums.length - 1;
    
    while(left <= right){
        const mid = ~~((right + right) / 2); //little truncation hack => binary trunc is little bit faster
        if(nums[mid] < nums[mid - 1]){ //We found the rotation! return the value
            return nums[mid];
        } else {
            if(nums[mid] > nums[0]) { //if the number in the current index is bigger than the first one, 
                                      //means that we need to look at the right side of the array
                left = mid + 1;
            } else {
                right =  mid - 1; //in the opposite way we wold need to look at the left side
            }
        }
    }
    
    return nums[0]; //no rotation found, return the first element
};