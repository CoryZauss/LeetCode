/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = [];
    let i = 0;
    while (i <= n) {
        let count = 0;
        let b = i.toString(2)
        for (let j  = 0 ; j < b.length; j++) {
            if (b[j] === "1") {
                count++
            }
        }
        result[i] = count
        i++
    }
    return result
};