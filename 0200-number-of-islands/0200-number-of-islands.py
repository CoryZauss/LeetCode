class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        
        
        #itterate, if we see 1
        # move r, l, d and up, recursivly mark each as zero until no more 1s
        # add 1 to island
        #return islands
        
        total, count = 0, 0
        
        def dfs(landMap, row, col):
            nonlocal count
            curRow = landMap[row]
            curLand = landMap[row][col]
            
            if curRow[col] == "0":
                return
            
            grid[row][col] = "0"
            
            if row - 1 > -1:
                # up is in bounds so check one above
                dfs(landMap, row -1, col)
            if col - 1 > -1:
                # left is in bounds so check 
                dfs(landMap, row , col - 1)
            if col +1 < len(curRow):
                # right is in bounds so check 
                dfs(landMap, row, col + 1)
            if row + 1 < len(landMap):
                # down is in bounds so check
                dfs(landMap, row +1, col)
            
            
                
            count +=1 
            return
        
        for i in range(len(grid)): # outer loop
            row = grid[i]
            
            for j in range(len(row)):# inner loop
                cur = row[j]
                if cur == "1":
                    dfs(grid, i , j)
                    total +=1
        return total
                
                
                
                
                
            