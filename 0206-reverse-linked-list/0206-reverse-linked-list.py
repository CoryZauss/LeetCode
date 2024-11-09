# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
        # TWO POINTER METHOD:
        
        prev, curr = None, head
        
        while curr: # while current is not null
            temp = curr.next # temp save the next node
            curr.next = prev # make the current nodes next node be the previous node (first one would be head)
            prev = curr # assign the previous node to be the current node
            curr = temp # assign the current node to be the temp node ( nodes original next node is now current)
        return prev
            
            
                