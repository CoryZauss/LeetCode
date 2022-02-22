/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //check if same length
    //if same length itterate thru and make 2 objects with the count of letters
    //compare letters and return if they are same
    if (s.length !== t.length) {
        return false
    }
    let word1 = {}; 
    let word2 = {};
    for (let i = 0; i < s.length; i++) {
        if (word1[s[i]]) {
            word1[s[i]]+=1
        } else {
            word1[s[i]] = 1
        }
         if (word2[t[i]]) {
            word2[t[i]]+=1
        } else {
            word2[t[i]] = 1
        }
    }
    for (let key in word1) {
        if (word1[key] !== word2[key]) {
            return false
        }
    }
    return true
};