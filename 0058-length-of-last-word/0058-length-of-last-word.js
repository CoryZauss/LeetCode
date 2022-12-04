/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let a = s.split(" ").filter(word => word !== '')
    console.log(a)
    
    return a.at(-1).length
};