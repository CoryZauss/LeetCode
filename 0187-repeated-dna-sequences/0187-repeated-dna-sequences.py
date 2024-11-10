class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        #create a window using 2 pointers 10 apart
        #slide it down, keep track of the 10 dig in a dict
        #itterate on the count
        seen, res = set(), set()
        
        for l in range(len(s)-9):
            cur = s[l:l+10]
            if cur in seen:
                res.add(cur)
            seen.add(cur)
        return list(res)
    
    
#         if len(s) < 10:
#             return []
    
#         d ={}
        
#         l=0
#         r=10
        
#         while r <= len(s):
#             cur = s[l:r]
        
#             if cur not in d:
#                 d[cur] = 1
#             else:
#                 d[cur] += 1
#             l+=1
#             r+=1
        
#         res = []
#         for key, value in d.items():
#             if value > 1:
#                 res.append(key)
#         print(d)
#         print(res)        
#         return res