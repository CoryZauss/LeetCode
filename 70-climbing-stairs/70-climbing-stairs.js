/**
 * @param {number} n
 * @return {number}
 */
// recursive ----
// var climbStairs = function(n, memo = new Array()) {
//     if (n === 1) {
//         return 1;
//     }
//     if (n === 2) {
//         return 2;
//     }
//     if (memo[n] !== undefined) {
//         return memo[n];
//     }
//     let result = climbStairs(n-1, memo) + climbStairs(n-2, memo);
//     memo[n] = result;
//     return result;
    
// };

// dynamic programming ---
var climbStairs = function(n) {
    if (n < 3) return n;
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++) {
        const current = first + second;
		// Update first and second for next loop
        first = second;
        second = current;
    }
	// When loop fininshes, second is pointing to the result of the last index, which is the result of the whole function
    return second;
};