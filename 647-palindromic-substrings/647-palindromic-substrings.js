/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
   let count = 0;
    const traverse = (start, end) => {
        while (start >= 0 && end < s.length && s[start] === s[end]) {
            count++
            start--;
            end++;
        }
    }
    for ( let i = 0; i < s.length; i++) {
        //check for even and odd lngth pals
        traverse(i,i);
        traverse(i,i+1)
    }
    return count
};