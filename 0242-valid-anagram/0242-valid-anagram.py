class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        d = {}
        d2 = {}
        
#         for i, char in enumerate(s):
#             if char not in d:
#                 d[char] = 1
#             else:
#                 d[char] += 1
                
#             if t[i] not in d2:
#                 d2[t[i]] = 1
#             else:
#                 d2[t[i]] += 1
                
#         if d == d2:
#             return True
#         else:
#             return False
        
        
        
        for i in range(len(s)):
            d[s[i]] = 1 + d.get(s[i], 0) # can .get and provide 0 as second param meaning if key value doesnt exist it will create it with 0 as value and then add 1
            d2[t[i]] = 1 + d2.get(t[i], 0)
        for c in d:
            if d[c] != d2.get(c, 0):
                return False
        return True