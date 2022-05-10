/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
      const symbols={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    const characterList = s.split("");
   
    sum=0
    characterList.map((data,i)=>{
        const currentValue = symbols[characterList[i]];
        const nextValue = characterList[i+1] ? symbols[characterList[i+1]]:0
        if(currentValue<nextValue){
            sum -=currentValue
        }else{
            sum +=currentValue
        }
        
    });
    return sum;
};