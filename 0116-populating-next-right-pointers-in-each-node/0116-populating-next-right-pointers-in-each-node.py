"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        
        cur, nxt = root, root.left if root else None
        # set cur to be the given node, and next to be nodes next if it exists
        
        while cur and nxt:
            #while they both are not null
            cur.left.next = cur.right
            # set current nodes left childs .next to be the right child
            if cur.next:
                # if current has a next
                cur.right.next = cur.next.left
                # set currents right childs next to be currents next.left
                
            cur = cur.next
            if not cur:
                cur = nxt
                nxt = cur.left
                #keep doing this til nxt is null
        return root