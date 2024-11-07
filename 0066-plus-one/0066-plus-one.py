class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        #look at last digit, increment by 1
        # (loop) if 9, last digit = 0, increment digit[i-1] by o
        if not digits:
            return [1]

        e = len(digits) -1
       
        if digits[e] == 9:
            # call plusone with 0 -> e -1
            r = self.plusOne(digits[0:e])
            r.append(0)
            return r
        else:
            digits[e] += 1
            return digits

        

