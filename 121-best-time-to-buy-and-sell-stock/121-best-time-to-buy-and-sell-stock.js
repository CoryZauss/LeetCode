/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // assume array always populated >0/ array is always positive number
    
    //init vals to track low and high and bigest diff
    //loop thru prices
    // if a num is lower than lowest 
      // loop thru rest of array for highest
      // set diff to highest - lowest
    
    
    let lowest;
    let highest;
    let diff = 0;
    for ( let i = 0; i < prices.length; i+= 1) {
        if (prices[i] < lowest || lowest === undefined) {
            lowest = prices[i];
            highest = prices[i];
            for ( let j = i+1; j < prices.length; j+=1){
                if (prices[j] > highest) {
                    highest = prices[j]
                }
                if (highest - lowest > diff) {
                    diff = highest - lowest
                }
            }
        }
    }
    return diff
};