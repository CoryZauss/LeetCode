/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for(let i = 1; i <strs.length; i++) {
        const idx = cutString(prefix, strs[i]);
        prefix = prefix.substring(0, idx);
    }
    
    return prefix;
};

const cutString = (prefix, curr) => {
    let i = 0;
    while(i < prefix.length && prefix[i] === curr[i]) {
        i++;
    }
    
    return i;
};