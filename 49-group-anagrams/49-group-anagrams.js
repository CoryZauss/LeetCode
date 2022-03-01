/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
  const isAna = function(w1, w2) {
      if (w1.length !== w2.length) {
          return false
      }
      let word1 = {}
      for (let i = 0; i < w1.length; i++) {
          if (word1[w1[i]] === undefined) {
              word1[w1[i]] = 1;
          } else {
              word1[w1[i]] ++;
          }
      }
     
    for (let j = 0; j < w2.length; j++) {
        if (word1[w2[j]]){
            word1[w2[j]]--
        } else {
            return false
        }
    }
      return true;
  }
  //
  let result = [[strs[0]]];
    for (let i = 1; i < strs.length; i++) {
        let current = strs[i];
        let foundgroup = false;
        for (let j = 0; j < result.length; j++) {
            let currentres = result[j][0]
            if (isAna(current, currentres)) {
                result[j].push(current);
                foundgroup = true;
                break;
            }
        }
        if (!foundgroup) {
            result.push([current])
        }
    }
  return result
    
};