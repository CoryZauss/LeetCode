/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let start = 0; maxLength = 0; maxRepeat = 0; frequency = {};
    
    for (let end = 0; end < s.length; end++) {
        let right = s[end];
        if (frequency[right] === undefined) {
            frequency[right] = 0;
        }
        frequency[right]++;
        maxRepeat = Math.max(maxRepeat, frequency[right]);
        if (end - start + 1 - maxRepeat > k) {
            const left = s[start]
            frequency[left]--
            start ++;
        }
        
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};