class Solution:
    def convert(self, s: str, numRows: int) -> str:
        # create numRows amount of lists
        # loop thru string. append to next list
        # once we hit last row, move backwards til first row
        if numRows == 1:
            return "".join(s)
        rows = []
        for i in range(numRows):
            rows.append([])
        
        at_row = 0
        go_back = False
        
        for i in range(len(s)):
            
            if at_row == numRows:
                go_back = True
                at_row -= 2
            if go_back == True and at_row == 0:
                go_back = False
                
             
                
            print('append at',at_row)
            rows[at_row].append(s[i])
            
            if go_back == True:
                at_row -= 1
            else:
                at_row += 1
            
                
                
        final = []        

        print('ROWS:', rows)
        for i in range(len(rows)):
            final += rows[i]
            
        print('final',final)
        
        return "".join(final)
    
    
