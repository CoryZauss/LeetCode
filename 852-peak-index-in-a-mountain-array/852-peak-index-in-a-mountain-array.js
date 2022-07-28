/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr, low=0,high=arr.length-1) {
    if(!arr.length) return -1
    
    const mid =((low+high) /2) | 0;
    console.log(mid)
    if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) return mid
    
    if(arr[mid] < arr[mid-1]) return peakIndexInMountainArray(arr, low, mid)
    
    if(arr[mid] < arr[mid+1]) return peakIndexInMountainArray(arr, mid, high)
};