class Solution:
    

    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        
        def binary_search(arr, target):
            if len(arr) == 1 and arr[0] == target: 
                return 0
                
            l,r= 0, len(arr)-1
            for i in range(len(arr)):
                mid = (r+l)//2
                if arr[mid] == target:
                    return mid
                elif arr[mid] > target:
                    r = mid -1
                else:
                    l = mid +1
            return -1
    
        arr = matrix
        for i in range(len(arr)):
            x = binary_search(arr[i],target)
            if x > -1:
                return True
            
        return False


    



  