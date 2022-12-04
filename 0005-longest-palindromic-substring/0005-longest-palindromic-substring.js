/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = '';
    if (isPal(s)) return s;
    
    for (let checkLength = s.length; checkLength >= 1; checkLength--) {
        console.log(checkLength)
        let i = 0;
        while (i < checkLength){
            let test = s.slice(i, checkLength)
            if (isPal(test)) {
                if (test.length > longest.length) longest = test
            }
            i++;
        }
    }
   return longest 
    
};


const isPal = (s) => {
    let start = 0, end = s.length-1
    while (start < end) {
        if (s[start] !== s[end]) return false
        start++, end--
    }
    return true;
}