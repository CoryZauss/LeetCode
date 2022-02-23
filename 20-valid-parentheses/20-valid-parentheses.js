/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // STACK?
    //itterate and push values into stack as long as they are openings
    //if not an opening, value at top of stack can be removed with closing pair
    //if not the correct closing pair, return false
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
          //if its a key push to stack
        if (brackets.hasOwnProperty(s[i])){
            stack.push(s[i])
        } else if (brackets[stack[stack.length-1] ] === s[i]){
           //if its not pushing we are removeing from stack
           // must check value to be removed matchs  closing bracket
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