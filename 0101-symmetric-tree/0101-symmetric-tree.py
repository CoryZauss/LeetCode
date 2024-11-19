# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
      
        if not root:
            return True  # An empty tree is symmetric.

        def isMirror(t1, t2):
            if not t1 and not t2:
                return True  # Both subtrees are empty.
            if not t1 or not t2:
                return False  # One subtree is empty, the other is not.
            # Check if current nodes are mirrors and recurse on children.
            return (t1.val == t2.val) and \
                   isMirror(t1.left, t2.right) and \
                   isMirror(t1.right, t2.left)

        # Start the recursion with the left and right children of the root.
        return isMirror(root.left, root.right)
    