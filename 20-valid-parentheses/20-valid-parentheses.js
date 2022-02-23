/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) {
      return false;
    }
    let brackets = {
        '(': ')',
        '{': '}',
        '[':']'
    }
    let openings = ['(','{','[']
    let stack = [];
      for (let i = 0; i < s.length; i++){
        if (brackets.hasOwnProperty(s[i])){
            stack.push(s[i])
        } else if (brackets[stack[stack.length-1] ] === s[i]){
            stack.pop()
        } else {
            return false;
        }
      }
    if (stack.length === 0) {
         return true;
    } else {
        return false;
    }
   
};