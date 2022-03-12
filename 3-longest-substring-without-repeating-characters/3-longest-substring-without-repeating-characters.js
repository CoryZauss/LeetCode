/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //keep track of max seen window
    //keep track of char count.
    //slide right pointer until a char is repeated
    // if a repeat char
       // decrement that char so it stays at 1
       // slide left pointer up
    //return max window size
    // O(n)
    let maxLength = 0; start = 0; charCount = {};
    //abcabccbb
    for (let end = 0; end < s.length; end++) {
        let current = s[end];
        if (!(charCount[current])) {
            charCount[current] = 0;
        }
        charCount[current]++;
        while (charCount[current] > 1) {
            const left = s[start]
            charCount[left]--
            start++;
        }
        maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength;
};