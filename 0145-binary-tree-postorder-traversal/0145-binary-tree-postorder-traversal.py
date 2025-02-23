# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        result = []
        
        def traverse(node):
            # move to end / full down left as possible before going right
            # if not node.left and not node.right:
            #     result.append(node)
            print(node)
            if node.left:
                traverse(node.left)
            if node.right:
                traverse(node.right)
            result.append(node.val)
        
        traverse(root)

        return result