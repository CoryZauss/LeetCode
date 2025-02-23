class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        # when looking at num , add previosus arrays num at indexes of same + index -1
        # if one inndex is out of range then it is 1 
        if numRows == 0:
            return []
        tri = [[1] * (i + 1) for i in range(numRows)]
    
        for i in range(len(tri)): # move thru rows
            if i -1 < 0:
                continue
            curRow= tri[i]
            prevRow = tri[i-1]
            
            for j in range(len(curRow)): #move thru units in the row
                if j == 0 or j == len(curRow) -1:
                    continue
                curRow[j] = prevRow[j] +  prevRow [j-1]

        print(tri)
        return tri