class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        #look at next num and if higher, buy this day
        # move right pointer keeping track of max until antoher dip and then sell the day before or the max?
      
        profit = 0
        
        
        for i in range(1, len(prices)):
            if prices[i] > prices[i-1]:
                profit += (prices[i] - prices[i-1])
                
            
        return profit