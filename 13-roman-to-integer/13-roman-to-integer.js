/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    let values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    for (let i = s.length-1; i >= 0; i--) {
        
        if (s[i] === 'V' && s[i-1] === 'I') {
            console.log('hi')
            sum += 4;
            i--;
            } else if ( s[i] === 'X' && s[i-1] === 'I'){
                sum += 9;
                i--;
            } else if ( s[i] === 'C' && s[i-1] === 'X') {
                sum+= 90;
                i--;
            } else if ( s[i] === 'L' && s[i-1] === 'X') {
                sum+= 40;
                i--
                           
            } else if ( s[i] === 'M' && s[i-1] === 'C') {
                sum+=900;
                i--;
                           
            } else if ( s[i] === 'D' && s[i-1] === 'C') {
                sum+=400;
                i--;
            } else {
                sum += values[s[i]]   
            }
            console.log(s[i], sum)
    }
    return sum;
};