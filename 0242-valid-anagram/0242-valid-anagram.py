class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        d = {}
        d2 = {}
        
        for i, char in enumerate(s):
            if char not in d:
                d[char] = 1
            else:
                d[char] += 1
                
            if t[i] not in d2:
                d2[t[i]] = 1
            else:
                d2[t[i]] += 1
                
        if d == d2:
            return True
        else:
            return False
        