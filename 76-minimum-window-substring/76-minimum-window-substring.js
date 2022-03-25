/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) {
        return "";
    }
   
    let map = {}; 
    let unique = 0;
    for ( let char of t) {
        if ( char in map) {
            map[char] +=1
        } else {
            map[char] = 1
            unique += 1
        }
    }
    
    let ans = '';
    let start = 0;
    let match = 0;
    for (let end = 0; end < s.length; end++) {
        let endChar = s[end]
        if ( endChar in map) {
            map[endChar] -= 1
            if (map[endChar] === 0 ) match += 1
        }
        
        if (match === unique) {
            while (match === unique){
                let startChar = s[start++]
                if (map[startChar] === 0) match -= 1
                map[startChar] += 1
            }
            
            let solution = s.slice(start -1, end +1);
            ans = (ans === '') ? solution : (ans.length > solution.length)? solution : ans
        }
        
        
    }//end for loop
    return ans;
};